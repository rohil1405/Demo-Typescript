let cpass = document.getElementById('changepass') as HTMLInputElement;
let change = document.getElementById('email') as HTMLInputElement;

cpass.addEventListener('click', function() {
    const local: Register[] = JSON.parse(localStorage.getItem('register') || '[]');

    let changeEmail: string = change.value;

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
