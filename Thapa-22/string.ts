//string
let str: string = 'Hello';
console.log(str);

//string concat
let fname: string = 'rohil';
let lname: string = 'shah';
let fullname: string = 'rohil shah';
let age = 20;

let classicname = fname + " "+ lname;
console.log(classicname);

function info(){
    return `name is: ${fullname} and My age is: ${age}`
}
console.log(info());
function check() {
    if(classicname === fullname) {
        return true
    } else {
        return false;
    }
}
console.log(check());

console.log(fullname.length);
console.log(fullname.split(' '));

export {}