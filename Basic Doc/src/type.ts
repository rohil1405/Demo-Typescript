//string
let firstName: string = 'Rohil shah';
console.log(firstName);
console.log(firstName.toLowerCase());

//number
let myNum: number = 10;
console.log(myNum.toFixed());

//array
let myArr: object  = [1,2,3];
console.log(myArr);

//object
let myObj: object = {a:1, b:2};
console.log(myObj);

//boolean
let login: boolean = true;

firstName = 'Shah Rohil';

//any
let a: any = 20;
console.log(a);
a = 'typescript'
console.log(a);

let b: any;
function getB() {
    return true;
}
b = getB();
console.log(b);

let array: Array<number> = [1,2,4,56];
console.log(array);

let myArray1: number[] = [];
let myArray2: number[][] = [
    [255,255,255]
]
console.log(myArray1, myArray2);

//function
function add(a: number, b:number, c?:number): number {
    return a+b+(c||0)
}
console.log(add(1,2,4));

const total:number[] = [30,40,50,60,70,80,90,100];
function addition(a:number, b:number, ...rest: number[]) {
    return a+b+rest.reduce((a:number, b:number) => a+b,0)
}
console.log(addition(10,20,30,40,50,60,70,80,90,100))

console.log(total.filter((tol)=>tol > 40));

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('r','r'));
console.log(compare('a','b'));
console.log(compare('b','a'));

export {}