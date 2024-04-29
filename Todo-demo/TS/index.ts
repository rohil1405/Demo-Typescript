let wc = document.getElementById('heading') as HTMLHeadingElement;
let logout = document.getElementById('logout') as HTMLButtonElement;

let get: store = JSON.parse(sessionStorage.getItem('login') || '[]')[0];
console.log(get);
let logo: string = get.email.split('@')[0];
let show: string = logo.charAt(0).toUpperCase() + logo.slice(1);
wc.textContent = `Welcome, ${show}`;

let log = sessionStorage.getItem('login');
if (!log) {
    location.href = 'login.html'
}
logout.addEventListener('click', function () {
    alert('Logout')
    sessionStorage.removeItem('login');
    location.href = 'login.html';
})

