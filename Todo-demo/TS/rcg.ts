const buttonElem = document.getElementById('clickMe') as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
const isWhite: boolean = false;

buttonElem.addEventListener('click', (): void => {
    console.log('I am clicked');

    if(isWhite) {
        bodyElem.style.backgroundColor = '';
    } else {
        bodyElem.style.backgroundColor = randomGen();
    }
})

function randomGen(): string {
    const random = () => Math.floor(Math.random() * 255);
    let color = `rgb(${random()}, ${random()}, ${random()})`
    return color;
}