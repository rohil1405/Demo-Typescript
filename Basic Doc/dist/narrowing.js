"use strict";

function type(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    else {
        return val + 10;
    }
}
console.log(type(3));
console.log(type("rohil"));
function check(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
function login(user) {
    if (user instanceof Date) {
        console.log(user.toISOString());
    }
    else {
        console.log(user.toUpperCase());
    }
}
function getShape(shape) {
    if (shape.kind === 'Circle') {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind == 'square') {
        return shape.side * shape.side;
    }
    return shape.width * shape.height;
}
console.log(getShape({ kind: 'Circle', radius: 10 }));
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "Rectangle":
            return shape.width * shape.height;
        default:
            const _default = shape;
            return _default;
    }
}
console.log(getArea({ kind: 'Rectangle', height: 2, width: 10 }));
