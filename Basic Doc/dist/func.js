"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFunc(num) {
    // num.toUpperCase();
    // return 'hello';
    return num + 10;
    // return "";
}
let a = myFunc(10);
console.log(a);
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signUpUser("Rohil", "r@gmail.com", true);
function loginUser(name = 'Rohil', email, isPaid = true) {
    console.log(name, email, isPaid);
}
loginUser("Shah", "r@gmail.com");
function addTwo(one, two) {
    return one + two;
}
let b = addTwo("1", 2);
console.log(b);
// function getValue(val: number): string {
//     if(val > 2) {
//         return false;
//     } 
//     return '200'
// }
let arr1 = [1, 2, 3];
function myArr1(a) {
    return Math.max(...a);
}
console.log(myArr1(arr1));
let arr2 = [1, 2, 3, 'rohil'];
function myArr2(a) {
    return a[3];
}
console.log(myArr2(arr2));
// let aNum:number | string = 10;
// let secNum: string | number = '10';
// function add(a,b) {
//     console.log(a+b)
// }
// add(secNum,aNum);
const name = ['rohil', 'darshil', 'prem', 'aum'];
name.map((names) => {
    return `Name is ${names}`;
});
function consoleError(msg) {
    console.log(msg);
}
consoleError('Hello');
// function handleError(msg: string): never {
//     throw new Error(msg)
// }
// handleError('Error')
function createUser(person) {
    return person.isPaid;
}
console.log(createUser({ name: 'Rohil', isPaid: false }));
//IMP
function createCourse(person) {
    return { name: person.fname + person.lname, age: 2024 - person.age };
}
let x = createCourse({ fname: 'rohil', lname: 'Shah', age: 21 });
console.log(x);
