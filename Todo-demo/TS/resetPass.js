"use strict";
let rpass = document.getElementById('resetpass');
let resetbtn = document.getElementById('reset');
let eUpdate = document.getElementById('eUpdate');
let emailShow = JSON.parse(sessionStorage.getItem('forgot') || '[]')[0].changeEmail;
eUpdate.value = emailShow;
resetbtn.addEventListener('click', function () {
    let resetPass = parseInt(rpass.value);
    let form = JSON.parse(localStorage.getItem('register') || '[]');
    let index = form.findIndex(u => u.email === eUpdate.value);
    console.log(index);
    if (index !== -1) {
        form[index].password = resetPass;
        localStorage.setItem('register', JSON.stringify(form));
        sessionStorage.removeItem('forgot');
        location.href = '../HTML/login.html';
    }
    else {
        alert('Enter valid crediantls');
    }
    let forgot = sessionStorage.getItem('forgot');
    if (!forgot) {
        location.href = 'login.html';
    }
});
