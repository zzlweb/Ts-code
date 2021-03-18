// 接口定义interface, 接口和type类型的区别，接口必须是一个对象 
interface LabelValue {
  // 定义接口
  label: string
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myObj = {
  size: 10,
  label: 'size 10 object'
}

printLabel(myObj)


// 接口的可选属性
interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig) {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// let p1: Point = { x: 10, y: 20 }
// p1.x= 5 // error!

// 函数类型
// 定义一个函数接口,接受两个参数，返回布尔值
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > 1
}

//  可索引类:描述通过索引可以得到的类型
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);
