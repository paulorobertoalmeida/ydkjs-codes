// Creating a regular Expression

let re1 = new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

//Testing for Matches

console.log(/abc/.test("abcde"));

conosole.log(/abc/.test("abcde"));

//Sets of characters.

console.log(/[0123456789]/.test("in 1992"));

console.log(/[0-9]/.test("in 1992"));

// Sets of Characters.

console.log(/[0123456789]/.test("in 1992"));

console.log(/[0-9]/.test("in 1992"));

let dataTime = /\d\d-\...;
console.log(dataTime.test("01-30-2003 15:20"));

console.log(dataTime.test("30-jan-2003 15:20"));