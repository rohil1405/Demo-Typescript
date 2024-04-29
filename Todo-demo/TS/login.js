"use strict";
function register() {
    window.location.href = 'register.html';
}
function changepass() {
    window.location.href = 'changePass.html';
}
let lbtn = document.getElementById('lbtn');
let inputOne = document.getElementById('email');
let inputTwo = document.getElementById('password');
let login = JSON.parse(sessionStorage.getItem('login') || '[]');
lbtn.addEventListener('click', function () {
    const local = JSON.parse(localStorage.getItem('register') || '[]');
    let email = inputOne.value;
    let pass = parseInt(inputTwo.value);
    const match = local.find(u => u.email === email && u.password === pass);
    if (match) {
        console.log('Login Successfully');
        let log = {
            email: email,
            pass: pass
        };
        login.push(log);
        console.log(log);
        sessionStorage.setItem('login', JSON.stringify(login));
        window.location.href = 'index.html';
    }
    else {
        alert('Please Enter Valid Crediants');
        inputOne.value = '';
        inputTwo.value = '';
    }
});
