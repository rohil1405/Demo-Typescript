"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const name = [];
function one(a) {
    return a;
}
console.log(one(9));
function two(a) {
    console.log(typeof a);
    return a;
}
console.log(two(true));
function three(a) {
    return a;
}
console.log(three("j"));
function four(a) {
    console.log(typeof a);
    return a;
}
console.log(four("3"));
function five(a) {
    return a;
}
console.log(five([1, 2, 33]));
function six(a) {
    return a;
}
function getProducts(product) {
    let index = 2;
    return product[index];
}
console.log(getProducts(['1', '2', '3']));
//Arrow Function
// function getProducts = <T>(p: T[]): T => {}
let a = 10;
console.log(a);
console.log(typeof a);
//T->Type, ,-Number of parametetr
//Ex:1
function anotherFunction(a, b) {
    return { a, b };
}
console.log(anotherFunction(3, '4'));
//Ex:2
function infoPerson(fname, lname, age) {
    return {
        fname,
        lname,
        age
    };
}
console.log(infoPerson('Rohil', 'Shah', 20));
function infoMan(fname, lname, age) {
    return {
        fullname: `${fname + " " + lname}`,
        age: 2024 - age
    };
}
console.log(infoMan('Rohil', 'Shah', 15));
function database(dbname, another) {
    return { dbname, another };
}
// console.log(database('bookhub', {true, 'root', 12345}));
console.log(database('bookhub', { connection: true, username: 'root', password: 12345 }));
class Sell {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const quiz = new Sell();
const course = new Sell();
quiz.addToCart({ name: 'Rohil', type: 'TypeScript' });
course.addToCart({ name: 'React', subject: 'Props/State', author: 'Meghrajsinh Dodiya' });
console.log('Quiz: ', quiz);
console.log('Course: ', course);
//Example
function keyValue(obj, key) {
    return obj[key];
}
console.log(keyValue({ a: '1', b: '2' }, 'b'));
