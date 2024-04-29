function type(val: string | number) {
    if(typeof val === 'string') {
        return val.toUpperCase();
    } else {
        return val + 10;
    }
}
console.log(type(3));
console.log(type("rohil"))

//in 
interface User {
    name: string
    email: string
}
interface Admin {
    name: string
    email: string
    isAdmin: boolean
}
const mihir: User = {
    name: 'mihir',
    email: 'm@gmail.com'
}
// console.log(mihir instanceof User)
function check(account: User | Admin) {
    if('isAdmin' in account) {
        return account.isAdmin;
    }
}

//instanceof
// function checkInstance(account: User | Admin ) {
//     if(account instanceof User | Admin) {
//         return account.isAdmin;
//     }
// }
console.log(Date);
function login(user: Date | string) {
    if(user instanceof Date) {
        console.log(user.toISOString());
    } else {
        console.log(user.toUpperCase());
    }
}

interface Square {
    kind: 'square'
    side: number
}
interface Circle {
    kind: 'Circle'
    radius: number
}
interface Rectangle {
    kind: 'Rectangle'
    height: number
    width: number
}

type Shape = Square | Circle | Rectangle

function getShape(shape: Shape) {
    if(shape.kind === 'Circle') {
        return Math.PI * shape.radius ** 2
    } else if(shape.kind == 'square') {
        return shape.side * shape.side
    }
    return shape.width * shape.height;
}
console.log(getShape({kind: 'Circle', radius: 10}))

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "Circle":
            return Math.PI * shape.radius **2;
        case "square": 
            return shape.side * shape.side;
        case "Rectangle":
            return shape.width * shape.height;
        default: 
            const _default: never = shape
            return _default;
    }
}
console.log(getArea({kind: 'Rectangle', height: 2, width: 10}))
export {}