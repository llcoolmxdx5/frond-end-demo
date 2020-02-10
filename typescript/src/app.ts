// let title: string = '千锋'
// function greeter(person: string): string {
//   return 'hello' + person
// }
// let user: string = 'susu'
// console.log(greeter(user))
// interface IPerson {
//   firstname: string
//   lastname: string
// }
// function greeter(person: IPerson): string {
//   return `hello ${person.firstname} ${person.lastname}`
// }
// let user = {
//   firstname: 'lu',
//   lastname: 'rongtao'
// }
// greeter(user)
// class Student {
//   fullName: string = ''
//   constructor(public firstName: string, public lastName: string) {
//     this.fullName = `${this.firstName}${this.lastName}`
//   }
// }
// let student = new Student('felix', 'lu')
// enum Color {Red = 1, Green, Blue};
// let c: Color = Color.Blue;
// console.log(c);    // 输出 3
// console.log(Color[3]);    // 输出 Blue
abstract class Department {
  constructor(public name: string) {
  }
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
