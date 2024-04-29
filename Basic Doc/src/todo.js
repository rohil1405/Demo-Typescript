var one = document.getElementById('title');
var two = document.getElementById('desc');
var btn = document.getElementById('btn');
var logout = document.getElementById('logout');
var theme = document.getElementById('theme');
var header = document.getElementById('header');
var border = document.getElementById('border');
two.style.display = 'none';
one.addEventListener('click', function () {
    two.style.display = 'block';
});
var userData = JSON.parse(localStorage.getItem('store') || '[]');
btn.addEventListener('click', function () {
    var title = one.value;
    var desc = two.value;
    var obj = {
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
logout.addEventListener('click', function () {
    sessionStorage.removeItem('login');
    location.href = 'login.html';
});
