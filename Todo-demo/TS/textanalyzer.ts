const text = document.getElementById('text') as HTMLTextAreaElement;
const copy = document.getElementById('copy') as HTMLButtonElement;
const uc = document.getElementById('uppercase') as HTMLButtonElement;
const lc = document.getElementById('lowercase') as HTMLButtonElement;
const trim = document.getElementById('trim') as HTMLButtonElement;
const textanal = document.getElementById('title') as HTMLHeadingElement;
const clear = document.getElementById('clear') as HTMLButtonElement;
const captial = document.getElementById('captial') as HTMLButtonElement;
const res = document.getElementById('res') as HTMLButtonElement;
const preview = document.getElementById('preview') as HTMLParagraphElement;
let logoutButton = document.getElementById('logout') as HTMLButtonElement;
let report = document.getElementById('report') as HTMLParagraphElement;
let darkLight = document.getElementById('darkLight') as HTMLButtonElement;
text.style.backgroundColor = 'whitesmoke';
uc.addEventListener('click', (): void => {
    const a: string = text.value.toUpperCase();
    text.value = a;
});

lc.addEventListener('click', (): void => {
    const a: string = text.value.toLowerCase();
    text.value = a;
});

trim.addEventListener('click', (): void => {
    const a: string = text.value.trim();
    text.value = a;
});

clear.addEventListener('click', (): void => {
    text.value = '';
});

copy.addEventListener('click', (): void => {
    navigator.clipboard.writeText(text.value);
});

captial.addEventListener('click', (): void => {
    const arr: string[] = text.value.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    text.value = arr.join(' ');
})

res.addEventListener('click', (): void => {
    let arr: string = text.value.replace(/\s+/g, ' ').trim();
    text.value = arr;
})

text.addEventListener('input', (): void => {

    report.textContent = `Text Report: ${text.value.split(" ").filter((ele) => {
        return ele.length !== 0
    }).length
        }`

    if (text.value.length > 0) {
        preview.textContent = `Preview: ${text.value}`;
    } else {
        preview.textContent = `Enter something in the textbox`;
    }

    // ` ${0.008 * text.value.split(' ').length} Minutes read`;
    // return preview;
})

darkLight.addEventListener('click', (): void => {
    if (darkLight.textContent == 'Dark') {
        darkLight.textContent = 'Light';
        text.style.backgroundColor = 'rgb(31, 31, 31)';
        text.style.color = 'white';
        main.style.backgroundColor = 'rgb(31, 31, 31)'
        textanal.style.color = 'white';
        report.style.color = 'white';
        preview.style.color = 'white';
        main.style.boxShadow = '0 0 10px rgb(31, 31, 2)';
        darkLight.style.border = '1px solid white'
    } else {
        darkLight.textContent = 'Dark';
        text.style.backgroundColor = 'whitesmoke';
        text.style.color = 'black';
        main.style.backgroundColor = 'whitesmoke';
        textanal.style.color = 'black';
        report.style.color = 'black';
        preview.style.color = 'black';
        main.style.boxShadow = '0 0 10px black';
    }

})

logoutButton.addEventListener('click', (): void => {
    alert('Are you sure...!!');
    sessionStorage.removeItem('login');
    location.href = 'login.html';
})



// preview.addEventListener('click', () => {
//     text.value.split(" ").filter((ele) => {
//         return ele.length !== 0
//     })
// })
