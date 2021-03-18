// 布尔类型
let isDone: boolean = false

// 数字类型
let decLiteral: number = 6;

// 字符串类型
let name: String = 'xs'

// 数组
let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]

// 元组: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
//比如，你可以定义一对值分别为string和number类型的元组。
//当访问一个越界的元素，会使用联合类型替代
let x: [string, number];
x = ['hello', 10]
x[3] = 'world' // ok, 字符串可以赋值给（string|number）类型 

// 枚举类型: 枚举类型可以为一组数值赋予友好的名字。
enum Color { red, green, blue }
let c: Color = Color.red
// 默认情况下从0开始编号，现在设置从1开始编号
enum Color {Red = 1, Green = 2, Blue}
let c: Color = Color.Green;

// 任意值:设置任意类型的数据
let notSure: any = 4