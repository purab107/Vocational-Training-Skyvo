"use strict";
/* 5! = 1 * 2 * 3 * 4 * 5 = 120 */
let numbero = 5;
let factorial = 1;
for (let i = 1; i <= numbero; i++) {
    factorial *= i;
}
console.log("factorial of " + numbero + " is " + factorial);
