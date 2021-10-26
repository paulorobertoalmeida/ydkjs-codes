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
