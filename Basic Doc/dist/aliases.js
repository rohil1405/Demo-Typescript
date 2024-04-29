"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Example 
let obj = {
    fname: 'rohil',
    lname: 'Shah',
    age: 21
};
function createCourse(person) {
    return {
        name: person.fname + person.lname,
        age: 2024 - person.age
    };
}
let x = createCourse(obj);
console.log(x);
const y = {
    name: 'rohil',
    email: 'r@gmail.com',
    isActive: true,
};
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
console.log(createUser(y));
let myInfo = {
    fname: 'rohil',
    age: 25,
    present: true,
    obj: {
        name: 'abc'
    }
};
myInfo.obj.name = 'pqr';
console.log(myInfo);
myInfo.age = 21;
// myInfo.fname = 'shah'
console.log(myInfo.age);
let details = {
    cardNumber: '140503',
    cardDate: 'May',
    cvv: 1405
};
function card(card) {
    return {
        Number: card.cardNumber,
        Date: card.cardDate,
        CVV: card.cvv
    };
}
console.log(card(details));
