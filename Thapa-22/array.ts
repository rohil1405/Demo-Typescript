//10

//using square brackets
const number: number[] = [1,2,3,4,5];

//using the array constructor
// const numbers1: number[] = new Array[1,2,3,4]
const numbers1: number[] = new Array(1,2,3,4);

//Using the Array of Method
const names: string[] = Array.of('Rohil', "Shah", "Typescript")

const value1: number[] = [1,2,3,4];
const value2: string = "Hello, world!";
const value3: {} = {name: 'rohil', age: '30'};
const value4: boolean[] = [true, false, true];
const value5: number = 43;

console.log(value1, value2, value3, value4, value5);


//11

const colors: string[] = ['red', 'green', 'blue', 'pink'];
const addColor = colors.push('purple');
console.log(addColor);
console.log(colors);

const removeColor = colors.pop();
console.log(removeColor);
console.log(colors);

const firstColor = colors.shift();
console.log(firstColor);
console.log(colors)

const lastColor = colors.unshift();
console.log(lastColor);
console.log(colors);

//map
const a: number[] = [1,2,3,4,5]

const mapping:number[]=a.map((val:number)=>val*2);
console.log(mapping);

//number to string;
const numberTostring: string[] = a.map((val:number) => val.toString());
console.log(number);

const gretherThree=a.map((val:number)=>val % 2===0);
console.log(gretherThree);

//filter

const filter = a.filter((val:number)=>val > 3);
console.log(filter);

const namess: string[] = ['alice', 'bob', 'Anna', 'Anand', 'Alex'];
const upper: string[] = namess.map((val:string)=>val.charAt(0).toUpperCase() + val.slice(1));
console.log(upper);

const num: number[] = [1,7,9,5];
const square:number[] = num.map((val:number)=>val**2);
console.log(square);

const len:string[] = namess.filter((val:string)=>val.length > 3);
console.log(len);

