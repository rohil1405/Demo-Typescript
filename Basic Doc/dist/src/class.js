"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Information of a class
class User {
    constructor(email, name, city = 'nadiad') {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const r = new User('r@gmail', 'rs');
console.log(r);
//public and private method
class Admin {
    constructor(email, password, id = 1) {
        this.email = email;
        this.password = password;
        this._courseCount = 1;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    get getEmail() {
        return `Email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('error');
        }
        this._courseCount = courseNum;
    }
}
class superAdmin extends Admin {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCounterCount() {
        this._courseCount = 10;
    }
}
let s = new Admin('admin@gmail.com', 'admin@1234');
console.log(s);
