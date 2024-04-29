"use strict";
const buttonElem = document.getElementById('clickMe');
const bodyElem = document.body;
const isWhite = false;
buttonElem.addEventListener('click', () => {
    console.log('I am clicked');
    if (isWhite) {
        bodyElem.style.backgroundColor = '';
    }
    else {
        bodyElem.style.backgroundColor = randomGen();
    }
});
function randomGen() {
    const random = () => Math.floor(Math.random() * 255);
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    return color;
}
