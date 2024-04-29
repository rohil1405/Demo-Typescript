function myFunc(num:number): number  {
    // num.toUpperCase();
    // return 'hello';
    return  num +10;
    // return "";
}
let a = myFunc(10);
console.log(a);

function signUpUser(name:string, email:string, isPaid:boolean) {
    console.log(name, email, isPaid);
}
signUpUser("Rohil","r@gmail.com",true);

function loginUser(name:string = 'Rohil', email:string, isPaid:boolean = true) {
    console.log(name, email, isPaid);
}
loginUser("Shah","r@gmail.com");

function addTwo(one: string, two: number): string {
    return one+two;
}
let b = addTwo("1",2);
console.log(b);

// function getValue(val: number): string {
//     if(val > 2) {
//         return false;
//     } 
//     return '200'
// }

let arr1 = [1,2,3];
function myArr1(a: number[]) {
    return Math.max(...a);
}
console.log(myArr1(arr1));

let arr2 = [1,2,3,'rohil'];
function myArr2(a: (string |number)[]) {
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

name.map((names): string=> {
    return `Name is ${names}`;
})

function consoleError(msg: string): void{
    console.log(msg);
}
consoleError('Hello')

// function handleError(msg: string): never {
//     throw new Error(msg)
// }
// handleError('Error')

function createUser(person: {name: string, isPaid: boolean}) {
    return person.isPaid;
}
console.log(createUser({name: 'Rohil', isPaid: false}))

//IMP

function createCourse(person: {fname: string, lname: string, age: number}):{name: string, age: number}{
    return {name: person.fname + person.lname, age:2024-person.age}
}
let x = createCourse({fname: 'rohil', lname: 'Shah', age: 21})
console.log(x)
export {}