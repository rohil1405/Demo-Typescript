"use strict";
let wc = document.getElementById('heading');
let logout = document.getElementById('logout');
let get = JSON.parse(sessionStorage.getItem('login') || '[]')[0];
console.log(get);
let logo = get.email.split('@')[0];
let show = logo.charAt(0).toUpperCase() + logo.slice(1);
wc.textContent = `Welcome, ${show}`;
let log = sessionStorage.getItem('login');
if (!log) {
    location.href = 'login.html';
}
logout.addEventListener('click', function () {
    alert('Logout');
    sessionStorage.removeItem('login');
    location.href = 'login.html';
});
