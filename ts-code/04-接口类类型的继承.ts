interface Counter {
  // 定义一个函数，接受number类型的参数，接受字符串返回值
  (start: number): string;
  interval: number;
  reset(): void;
}

// 类的继承
class Control {
  // 私有属性只允许在类的内部使用
  private state: any;
}

class SelectControl extends Control {
  select(): void
}


