"use strict";
let one = document.getElementById('title');
let two = document.getElementById('desc');
let btn = document.getElementById('btn');
let theme = document.getElementById('theme');
let header = document.getElementById('header');
let border = document.getElementById('border');
two.style.display = 'none';
one.addEventListener('click', function () {
    two.style.display = 'block';
});
let userData = JSON.parse(localStorage.getItem('store') || '[]');
btn.addEventListener('click', function () {
    let title = one.value;
    let desc = two.value;
    let obj = {
        title: title,
        desc: desc
    };
    userData.push(obj);
    localStorage.setItem('store', JSON.stringify(userData));
    one.value = '';
    two.value = '';
    two.style.display = 'none';
});
theme.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    header.style.backgroundColor = 'black';
    header.style.border = '1px solid white';
    header.style.color = 'white';
    border.style.backgroundColor = 'black';
    border.style.border = '1px solid white';
});
