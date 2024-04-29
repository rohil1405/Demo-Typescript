//10
//using square brackets
var number = [1, 2, 3, 4, 5];
//using the array constructor
// const numbers1: number[] = new Array[1,2,3,4]
var numbers1 = new Array(1, 2, 3, 4);
//Using the Array of Method
var names = Array.of('Rohil', "Shah", "Typescript");
var value1 = [1, 2, 3, 4];
var value2 = "Hello, world!";
var value3 = { name: 'rohil', age: '30' };
var value4 = [true, false, true];
var value5 = 43;
console.log(value1, value2, value3, value4, value5);
//11
var colors = ['red', 'green', 'blue', 'pink'];
var addColor = colors.push('purple');
console.log(addColor);
console.log(colors);
var removeColor = colors.pop();
console.log(removeColor);
console.log(colors);
var firstColor = colors.shift();
console.log(firstColor);
console.log(colors);
var lastColor = colors.unshift();
console.log(lastColor);
console.log(colors);
//map
var a = [1, 2, 3, 4, 5];
var mapping = a.map(function (val) { return val * 2; });
console.log(mapping);
//number to string;
var numberTostring = a.map(function (val) { return val.toString(); });
console.log(number);
var gretherThree = a.map(function (val) { return val % 2 === 0; });
console.log(gretherThree);
//filter
var filter = a.filter(function (val) { return val > 3; });
console.log(filter);
var namess = ['alice', 'bob', 'Anna', 'Anand', 'Alex'];
var upper = namess.map(function (val) { return val.charAt(0).toUpperCase() + val.slice(1); });
console.log(upper);
var num = [1, 7, 9, 5];
var square = num.map(function (val) { return Math.pow(val, 2); });
console.log(square);
var len = namess.filter(function (val) { return val.length > 3; });
console.log(len);
