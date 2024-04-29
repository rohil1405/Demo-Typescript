"use strict";
let rohil = {
    name: 'Shah',
    id: 20
};
rohil = { username: 'rohil', id: 21 };
console.log(rohil);
function getId(id) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id;
}
console.log(getId(4));
let myNum = [1, 2, 34];
let myString = ['k', '9', 'o0'];
let combine = ['1', 2, 3, '4'];
let all = [{ a: 1, b: true }, false, '89'];
console.log(myNum, myString, combine, all);
let stand;
stand = 'M';
// stand='RTo'
