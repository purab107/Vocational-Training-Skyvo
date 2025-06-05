"use strict";
let numero = 10;
/*A prime number is a whole number greater than 1 that has exactly two distinct positive divisors: 1 and itself. */
function isPrime(numero) {
    if (numero <= 1)
        return false;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i == 0)
            return false;
    }
    return true;
}
if (isPrime(numero)) {
    console.log(numero + " is a Prime Number");
}
else {
    console.log(numero + " is not a Prime Number");
}
