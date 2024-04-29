"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day;
(function (day) {
    day[day["Sun"] = 0] = "Sun";
    day[day["Mon"] = 1] = "Mon";
    day[day["Tue"] = 2] = "Tue";
    day[day["Wed"] = 3] = "Wed";
    day[day["Thu"] = 4] = "Thu";
    day[day["Fri"] = 5] = "Fri";
    day[day["Sat"] = 6] = "Sat";
})(day || (day = {}));
const count = day.Mon;
if (count === day.Mon) {
    console.log('Monday');
}
else {
    console.log('Not a Monday');
}
