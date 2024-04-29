//Example 
let obj = {
    fname: 'rohil', 
    lname: 'Shah', 
    age: 21
}

function createCourse(person: {fname: string, lname: string, age: number}):{name: string, age: number}{
    return {
        name: person.fname + person.lname, 
        age:2024-person.age
    }
}
let x = createCourse(obj)
console.log(x)

//Aliases
type User = {
    name: string,
    email: string,
    isActive: Boolean,
    creditcardDetails ?: number
}
const y = {
    name: 'rohil',
    email: 'r@gmail.com',
    isActive: true,
}

function createUser(user: User):User {
    return {name: user.name, email: user.email, isActive: user.isActive}
}
console.log(createUser(y))


//ReadOnly

type info = {
    readonly fname: string,
    age: number,
    present: boolean,
    readonly obj: {
        name: string
    }
}

let myInfo: info = {
    fname: 'rohil',
    age: 25,
    present: true,
    obj: {
        name: 'abc'
    }
}
myInfo.obj.name = 'pqr'
console.log(myInfo);
myInfo.age = 21;
// myInfo.fname = 'shah'
console.log(myInfo.age)

//combine
type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
let details = {
    cardNumber: '140503',
    cardDate: 'May',
    cvv: 1405
}
function card(card: cardDetails):{Number: string, Date:string, CVV:number } {
     return {
        Number: card.cardNumber, 
        Date: card.cardDate, 
        CVV: card.cvv 
    }
}
console.log(card(details))

export {}
