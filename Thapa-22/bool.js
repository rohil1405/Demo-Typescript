function check(num) {
    if (num % 4 === 0 && num % 8 === 0) {
        return 'Number is divible by 4 and 8';
    }
    else {
        return 'Not Divisible';
    }
}
console.log(check(32));
console.log(check(45));
var interger = 1233444556777n;
console.log(interger);
var anotherInt = BigInt('909019994567899');
console.log(anotherInt);
var sum = interger + anotherInt;
var diff = interger - anotherInt;
var mode = interger % anotherInt;
var divible = anotherInt / interger;
var multi = interger * anotherInt;
console.log(sum, diff, mode);
console.log(divible, multi);
var maxNumber = Number.MAX_SAFE_INTEGER;
var minNumber = Number.MIN_SAFE_INTEGER;
var value = Number.MIN_VALUE;
console.log(minNumber);
console.log(value);
console.log(maxNumber + minNumber);
console.log(maxNumber);
// async function fetchData(): Promise<unknown> {
//     const response = await fetch('https:');
//     const data = await response.json();
//     return data;
// }
// async function processData() {
//     const response = await fetchData();
//     if(typeof response === 'object') {
//     }
// }
