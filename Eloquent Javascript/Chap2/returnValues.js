//Return Values
console.log(Math.max(2, 4)); //4

console.log(Math.min(2, 4) + 100); //102

// CONDITIONAL EXECUTION
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didnt you give me a number?");
}