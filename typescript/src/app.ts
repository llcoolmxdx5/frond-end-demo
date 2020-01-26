// var greeting: string = 'hell'
// var greeting: number = 3
// var greeting: boolean = true
// var greeting: any[] = ['a', 'v', 1]
// var greeting: [string, string] = ['a','b']
// var greeting: string[] = ['a', 'b']
// var greeting: Array<string> = ['a', 'b']
// enum obj {
//   a = 1,
//   b = 'c'
// }
// function foo(x: number, y: number): number {
//   return x + y
// }
// foo(2, 3)
// interface Post {
//   title: string
//   content: string
//   text?: string
// }
// let post: Post = {
//   title: 'hello',
//   content: 'world'
// }
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
interface Fun {
  (x: string, y:string): string
}
let fun: Fun = (x, z) => {
  return x + z
}

