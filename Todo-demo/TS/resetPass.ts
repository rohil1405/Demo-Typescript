let rpass = document.getElementById('resetpass') as HTMLInputElement;
let resetbtn = document.getElementById('reset') as HTMLButtonElement;
let eUpdate = document.getElementById('eUpdate') as HTMLInputElement;

let emailShow = JSON.parse(sessionStorage.getItem('forgot') || '[]')[0].changeEmail;
eUpdate.value = emailShow;

resetbtn.addEventListener('click', function() {
    let resetPass: number = parseInt(rpass.value);

    let form: Register[] = JSON.parse(localStorage.getItem('register') || '[]');
    
    let index = form.findIndex(u => u.email === eUpdate.value);
    console.log(index);

    if (index !== -1) {
        form[index].password = resetPass;
        localStorage.setItem('register', JSON.stringify(form));
        sessionStorage.removeItem('forgot');
        location.href = '../HTML/login.html';
    } else {
        alert('Enter valid crediantls');
    }
    let forgot = sessionStorage.getItem('forgot');
    if (!forgot) {
        location.href = 'login.html'
    }
})


