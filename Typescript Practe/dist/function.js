"use strict";
function add(x, y) {
    return x + y;
}
let mul = function (x, y) {
    console.log("mul is : " + (x * y));
};
function printName(firstname, lastname) {
    console.log(firstname + " " + lastname);
}
;
let sum = add(2, 3);
console.log(sum);
mul(2, 3);
printName("Peter", "Parker");
printName("Bruce");
