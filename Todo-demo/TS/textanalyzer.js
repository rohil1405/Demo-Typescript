"use strict";
const text = document.getElementById('text');
const copy = document.getElementById('copy');
const uc = document.getElementById('uppercase');
const lc = document.getElementById('lowercase');
const trim = document.getElementById('trim');
const textanal = document.getElementById('title');
const clear = document.getElementById('clear');
const captial = document.getElementById('captial');
const res = document.getElementById('res');
const preview = document.getElementById('preview');
let logoutButton = document.getElementById('logout');
let report = document.getElementById('report');
let darkLight = document.getElementById('darkLight');
text.style.backgroundColor = 'whitesmoke';
uc.addEventListener('click', () => {
    const a = text.value.toUpperCase();
    text.value = a;
});
lc.addEventListener('click', () => {
    const a = text.value.toLowerCase();
    text.value = a;
});
trim.addEventListener('click', () => {
    const a = text.value.trim();
    text.value = a;
});
clear.addEventListener('click', () => {
    text.value = '';
});
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(text.value);
});
captial.addEventListener('click', () => {
    const arr = text.value.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    text.value = arr.join(' ');
});
res.addEventListener('click', () => {
    let arr = text.value.replace(/\s+/g, ' ').trim();
    text.value = arr;
});
text.addEventListener('input', () => {
    report.textContent = `Text Report: ${text.value.split(" ").filter((ele) => {
        return ele.length !== 0;
    }).length}`;
    if (text.value.length > 0) {
        preview.textContent = `Preview: ${text.value}`;
    }
    else {
        preview.textContent = `Enter something in the textbox`;
    }
    // ` ${0.008 * text.value.split(' ').length} Minutes read`;
    // return preview;
});
darkLight.addEventListener('click', () => {
    if (darkLight.textContent == 'Dark') {
        darkLight.textContent = 'Light';
        text.style.backgroundColor = 'rgb(31, 31, 31)';
        text.style.color = 'white';
        main.style.backgroundColor = 'rgb(31, 31, 31)';
        textanal.style.color = 'white';
        report.style.color = 'white';
        preview.style.color = 'white';
        main.style.boxShadow = '0 0 10px rgb(31, 31, 2)';
        darkLight.style.border = '1px solid white';
    }
    else {
        darkLight.textContent = 'Dark';
        text.style.backgroundColor = 'whitesmoke';
        text.style.color = 'black';
        main.style.backgroundColor = 'whitesmoke';
        textanal.style.color = 'black';
        report.style.color = 'black';
        preview.style.color = 'black';
        main.style.boxShadow = '0 0 10px black';
    }
});
logoutButton.addEventListener('click', () => {
    alert('Are you sure...!!');
    sessionStorage.removeItem('login');
    location.href = 'login.html';
});
// preview.addEventListener('click', () => {
//     text.value.split(" ").filter((ele) => {
//         return ele.length !== 0
//     })
// })
