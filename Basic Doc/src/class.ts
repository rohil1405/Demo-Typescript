//Information of a class
class User {
    email: string
    name: string
    readonly city: string
    constructor(email: string, name: string, city:string = 'nadiad') {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}



const r = new User('r@gmail', 'rs')
console.log(r)

//public and private method
class Admin {
    id: number;
    protected _courseCount:number = 1;
    constructor(
        public email: string,
        private password: string,
        id: number = 1
    )  {
        this.email = email
        this.password = password
        this.id = id
    }

    get getEmail():string {
        return `Email is ${this.email}`;
    }
    get courseCount():number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if(courseNum <=1) {
            throw new Error('error')       
        }
        this._courseCount = courseNum;  
    }
}

class superAdmin extends Admin {
    isFamily: boolean = true
    changeCounterCount(){
        this._courseCount = 10
    }
}

let s = new Admin('admin@gmail.com', 'admin@1234')
console.log(s);
export {}