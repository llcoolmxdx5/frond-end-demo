"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
