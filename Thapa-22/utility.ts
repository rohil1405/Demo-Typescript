//Partial<Type> : 

//Constructs a type with all properties of Type set to optional. 
// This utility will return a type that represents all subsets of a given type.

//1)
interface Point {
    x: number,
    y: number
}

let point: Partial<Point> = {} //// `Partial` allows x and y to be optional
point.x = 10;
console.log(point);

//2)
interface Todo {
    title: string,
    desc: string
}

// Partial<Todo> = {
//     title?: string,
//     desc?: string
// }

const todo1 = {
    title: 'rohil',
    desc: 'shah'
}

function updatedTodo(todo: Todo, update: Partial<Todo>) {
    return {...todo, ...update}
}

const todo2 = updatedTodo(todo1, {
    desc: 'Sanjay'
})
console.log(todo2);

//Required Type: Constructs a type consisting of all properties of Type set to required. 
//The opposite of Partial.

interface Props {
    a?: number,
    b?: string
}

// Required<Props> {
//     a:number,
//     b: string
// }

const props: Props = {a: 5};
// const prop: Required<Props> = {a: 5}; 

//Readonly: Constructs a type with all properties of Type set to readonly, 
//meaning the properties of the constructed type cannot be reassigned.

//Record<Key, Type>
//Constructs an object type whose property keys are Keys and whose property values are Type. 
//This utility can be used to map the properties of a type to another type.

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

interface info {
    age: number,
    city: string
}

type InfoName = 'rohil' | 'molu' | 'mihir';

const person: Record<InfoName, info> = {
    rohil: {
        age:21,
        city: 'Nadiad'
    },
    molu: {
        age: 22,
        city: 'Ahmedabad'
    },
    mihir: {
        age: 23,
        city: 'Rajkot'
    }

}

//Pick<Type, Key>: Constructs a type by picking the set of properties Keys 
//(string literal or union of string literals) from Type.

type InfoPick = Pick<info, 'city'>
const pick: InfoPick = {
    city: 'Nadiad'
}

//Omit<Type, key>: Constructs a type by picking all properties from Type and then removing Keys 
//(string literal or union of string literals). 
//The opposite of Pick.

interface numbers {
    a: number,
    b: number,
    c:number
}

type NumberOmit = Omit<numbers, 'a' | 'c'>;
const omit: NumberOmit = {
    b: 20
}

//Exclude<UnionType, ExcludedMembers>
//Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

type TO = Exclude<'a' | 'b' | 'c' , 'b'>
type T1 = Exclude<'a' | 'b' | 'c',  'a' | 'c'>
type T2 = Exclude<number | string | (()=>void), Function>

type Avaliable = 'Tea' | "Water" | 'Juice' | 'Coffee' | 'Ice-cream';
type rohilNotLike = 'Coffee' | 'Juice'
let exclude: Exclude<Avaliable, rohilNotLike>;
// exclude = 'Juice'

//Extract<Type, Union>
//Constructs a type by extracting from Type all union members that are assignable to Union.

type T3 = Extract<'a' | 'b' | 'n' | 'm', 'p' | 'q' | 'a'> //a
type T4 = Extract<number | string | Function , Function > //Function

type rohilLike = 'Tea' | 'Ice-cream' | 'Lunch';
let extract: Extract<Avaliable, rohilLike>

//NonNullable<Type>: 
//Constructs a type by excluding null and undefined from Type

type T5 = NonNullable<string | null | undefined | number[]>
type T6 = NonNullable<null | undefined >

interface color {
    color?: 'red' | 'blue' | 'green'
}


