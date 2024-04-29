"use strict";
function button(val) {
    window.location.href = `${val}.html`;
}
let fname = document.getElementById('fullname');
let mail = document.getElementById('email');
let pass = document.getElementById('password');
let mobilenumber = document.getElementById('phonenumber');
let rbtn = document.getElementById('rbtn');
let form = JSON.parse(localStorage.getItem('register') || '[]');
rbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let fullname = fname.value;
    let email = mail.value;
    let password = parseInt(pass.value);
    let phonenumber = parseInt(mobilenumber.value);
    console.log(fullname, email, password, phonenumber);
    const data = {
        fullname: fullname,
        email: email,
        password: password,
        phonenumber: phonenumber
    };
    form.push(data);
    localStorage.setItem('register', JSON.stringify(form));
    window.location.href = 'login.html';
});
