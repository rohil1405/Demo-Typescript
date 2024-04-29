"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
let firstName = 'Rohil shah';
console.log(firstName);
console.log(firstName.toLowerCase());
//number
let myNum = 10;
console.log(myNum.toFixed());
//array
let myArr = [1, 2, 3];
console.log(myArr);
//object
let myObj = { a: 1, b: 2 };
console.log(myObj);
//boolean
let login = true;
firstName = 'Shah Rohil';
//any
let a = 20;
console.log(a);
a = 'typescript';
console.log(a);
let b;
function getB() {
    return true;
}
b = getB();
console.log(b);
let array = [1, 2, 4, 56];
console.log(array);
let myArray1 = [];
let myArray2 = [
    [255, 255, 255]
];
console.log(myArray1, myArray2);
//function
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2, 4));
const total = [30, 40, 50, 60, 70, 80, 90, 100];
function addition(a, b, ...rest) {
    return a + b + rest.reduce((a, b) => a + b, 0);
}
console.log(addition(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
console.log(total.filter((tol) => tol > 40));
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('r', 'r'));
console.log(compare('a', 'b'));
console.log(compare('b', 'a'));
