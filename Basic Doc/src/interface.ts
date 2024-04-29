interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrail(): string,
    getcoupan(coupanname: string, value: number): number
}

interface User {
    githubId?: number
}

interface Admin extends User {
    role: 'admin' | 'leraner' | 'teaching'
}

const rohil: Admin = {
    dbId: 89,
    email: 'r@gmail.com',
    role: 'admin',
    userId: 20,
    githubId: 34,
    startTrail() {
        return 'Hello'
    },
    getcoupan: (name: 'rohil14', off: 14) => {
        return 10
    }
}

rohil.email = 's@r.com';
console.log(rohil);

interface Customer {
    readonly name: string,
    age: number,
    phonenumber: number,
}

interface Buyer extends Customer {
    userType: string
    userId?: number
}

interface Seller extends Buyer {
    order: number
}

let card: Seller = {
    name: 'rohil',
    age: 20,
    phonenumber: 9898198059,
    userType: 'seller',
    order: 5
}
console.log(card);
export {}