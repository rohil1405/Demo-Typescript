type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}
let rohil: User | Admin = {
    name: 'Shah',
    id: 20
}
rohil = {username: 'rohil', id: 21}
console.log(rohil);

function getId(id: number | string) {
    if(typeof id === 'string') {
        return id.toUpperCase()
    } 
    return id
}
console.log(getId(4))

let myNum: number[] = [1,2,34];
let myString:  string[] = ['k','9','o0'];
let combine: (number | string)[] = ['1',2,3,'4']
let all: any = [{a:1, b:true}, false, '89'];
console.log(myNum, myString, combine, all);

let stand: 'M' | 'J' | 'Library'
stand = 'M';
// stand='RTo'