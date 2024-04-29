const score: Array<number> = [];
const name: Array<string> = [];

function one(a: number): number {
    return a;
}
console.log(one(9))

function two(a: number|boolean) : boolean | number {
    console.log(typeof a)
    return a;
}
console.log(two(true))

function three(a: any) : any {
    return a;
}
console.log(three("j"));

function four<Type>(a: Type): Type {
    console.log(typeof a)
    return a
}
console.log(four("3"))

function five<rohil>(a: rohil): rohil {
    return a
}
console.log(five([1,2,33]))

export {}

interface info {
    name: string,
    id: number
}
function six<info>(a: info): info {
    return a;
}

function getProducts<T>(product: T[]): T {
    let index = 2;
    return product[index];
}
console.log(getProducts(['1','2','3']));

//Arrow Function
// function getProducts = <T>(p: T[]): T => {}

let a = 10 as unknown as string | boolean;
console.log(a);
console.log(typeof a);

//T->Type, ,-Number of parametetr
//Ex:1
function anotherFunction<T,U>(a:T, b: U): object {
    return {a, b}
}
console.log(anotherFunction(3,'4'))

//Ex:2
function infoPerson<T,U,V extends number>(fname: T, lname: U, age: V): object {
    return {
        fname,
        lname,
        age
    }
}
console.log(infoPerson('Rohil', 'Shah', 20));

function infoMan<T extends string,U extends string,V extends number>(fname: T, lname: U, age: V): {fullname: string, age:number} {
    return {
        fullname: `${fname + " " + lname}`,
        age: 2024-age
    }
}
console.log(infoMan('Rohil', 'Shah', 15));

interface Db {
    connection: boolean;
    username: string;
    password: number;
}
function database<T extends string, U extends Db>(dbname: T, another: U): object {
    return {dbname, another}
}
// console.log(database('bookhub', {true, 'root', 12345}));
console.log(database('bookhub', { connection: true, username: 'root', password: 12345 }));

//Example
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    subject: string,
    author: string
}

class Sell<T> {
    public cart: T[] = []
    addToCart(product: T) {
        this.cart.push(product)
    }
}

const quiz = new Sell<Quiz>();
const course = new Sell<Course>();

quiz.addToCart({name: 'Rohil', type: 'TypeScript'});
course.addToCart({name: 'React', subject: 'Props/State', author: 'Meghrajsinh Dodiya'})

console.log('Quiz: ',quiz);
console.log('Course: ',course);

//Example

function keyValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
console.log(keyValue({a:'1',b:'2'}, 'b'))

