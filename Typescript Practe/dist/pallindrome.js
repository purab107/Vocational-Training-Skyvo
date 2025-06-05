"use strict";
let num = 123;
let rev = 0;
let copy = num;
while (copy > 0) {
    rev = (rev * 10) + copy % 10;
    copy = Math.floor(copy / 10);
    /* note for me :
        Unlike c++, copy variable becomes floating point number as we divide it by 10 hence we need to use Math.floor() to
        convert it into integer
    */
}
if (rev === num) {
    console.log("It is a Pallindrome");
}
else {
    console.log("It is not a Pallindrome");
}
