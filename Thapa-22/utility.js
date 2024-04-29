//Partial<Type> : 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var point = {}; //// `Partial` allows x and y to be optional
point.x = 10;
console.log(point);
// Partial<Todo> = {
//     title?: string,
//     desc?: string
// }
var todo1 = {
    title: 'rohil',
    desc: 'shah'
};
function updatedTodo(todo, update) {
    return __assign(__assign({}, todo), update);
}
var todo2 = updatedTodo(todo1, {
    desc: 'Sanjay'
});
console.log(todo2);
// Required<Props> {
//     a:number,
//     b: string
// }
