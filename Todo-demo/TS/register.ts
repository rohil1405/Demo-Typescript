function button(val: string): void{
    window.location.href = `${val}.html`;
}

let fname = document.getElementById('fullname') as HTMLInputElement;
let mail = document.getElementById('email') as HTMLInputElement;
let pass = document.getElementById('password') as HTMLInputElement;
let mobilenumber = document.getElementById('phonenumber') as HTMLInputElement;
let rbtn = document.getElementById('rbtn') as HTMLButtonElement;

type Register = {
    fullname: string,
    email: string,
    password: number,
    phonenumber: number
}

let form: Register[] = JSON.parse(localStorage.getItem('register') || '[]')

rbtn.addEventListener('click', function(e) {
    e.preventDefault();
    let fullname: string = fname.value;
    let email: string = mail.value;
    let password: number = parseInt(pass.value);
    let phonenumber: number = parseInt(mobilenumber.value);

    console.log(fullname, email, password, phonenumber)

    const data: Register = {
        fullname: fullname,
        email: email,
        password: password,
        phonenumber: phonenumber
    }
    form.push(data);

    localStorage.setItem('register', JSON.stringify(form));

    window.location.href = 'login.html'
})

