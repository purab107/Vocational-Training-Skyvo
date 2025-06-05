/* armstrong -> 153 = 1*1*1 + 5*5*5 + 3*3*3 = 153 */

let numeroSinco = 153;
let copySinco = numeroSinco;
let lastDigit = 0;
let digitSum = 0;

while(copySinco > 0){
    lastDigit = copySinco % 10;
    digitSum = digitSum + lastDigit * lastDigit * lastDigit;
    copySinco = Math.floor(copySinco / 10);
}

if(digitSum == numeroSinco){
    console.log("armstrong number");
}else{
    console.log("not an armstrong number");
}