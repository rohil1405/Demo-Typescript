function register(): void {
    window.location.href = 'register.html';
}
function changepass() : void {
    window.location.href = 'changePass.html';
}
let lbtn = document.getElementById('lbtn') as HTMLButtonElement;
let inputOne = document.getElementById('email') as HTMLInputElement;
let inputTwo = document.getElementById('password') as HTMLInputElement;

type store = {
    email: string,
    pass: number
}

let login: store[] = JSON.parse(sessionStorage.getItem('login') || '[]')

lbtn.addEventListener('click', function() {
    const local: Register[] = JSON.parse(localStorage.getItem('register') || '[]');
    let email: string = inputOne.value;
    let pass:  number = parseInt(inputTwo.value);

    const match = local.find(u => u.email === email && u.password === pass);

    if(match) {
        console.log('Login Successfully');

        let log: store = {
            email: email,
            pass: pass
        }
        login.push(log);
        console.log(log)
        sessionStorage.setItem('login', JSON.stringify(login))

        window.location.href = 'index.html'
    } else {
        alert('Please Enter Valid Crediants')
        inputOne.value = '';
        inputTwo.value = '';
    }  
})