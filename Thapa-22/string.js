"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
var str = 'Hello';
console.log(str);
//string concat
var fname = 'rohil';
var lname = 'shah';
var fullname = 'rohil shah';
var age = 20;
var classicname = fname + " " + lname;
console.log(classicname);
function info() {
    return "name is: ".concat(fullname, " and My age is: ").concat(age);
}
console.log(info());
function check() {
    if (classicname === fullname) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check());
console.log(fullname.length);
console.log(fullname.split(' '));
