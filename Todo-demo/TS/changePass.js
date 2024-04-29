"use strict";
let cpass = document.getElementById('changepass');
let change = document.getElementById('email');
cpass.addEventListener('click', function () {
    const local = JSON.parse(localStorage.getItem('register') || '[]');
    let changeEmail = change.value;
    const match = local.find(u => u.email === changeEmail);
    console.log(match);
    if (match) {
        const forgot = JSON.parse(sessionStorage.getItem('forgot') || '[]');
        const cemail = {
            changeEmail: changeEmail
        };
        forgot.push(cemail);
        sessionStorage.setItem('forgot', JSON.stringify(forgot));
        window.location.href = '../HTML/resetPass.html';
    }
});
