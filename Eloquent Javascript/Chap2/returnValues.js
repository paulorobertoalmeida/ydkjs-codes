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

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//While loop

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
} //0,1,2,3,4,5,6,7,8,9,10,11,12

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result); //1024


let yourName;
do {
  yourName = prompt("Who are you");
} while (!yourName);
console.log(yourName);



// Identing code

if (false != true) {
    console.log("thats make sense");
    if (1 < 2) {
      console.log("no surprise there");
    }
  }

// For Loops

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }  

  /*
  0
2
4
6
8
10
12 

*/

// For Loops

let result = 1;
for (let counter = 0; counter < 10; counter = counter +1) {
  result = result * 2;
}

console.log(result); //1024


// Breaking out of a Loop

for (let current = 20; ;current++) {
    if (current % 7 == 0) {
      console.log(current); //21
      break;
    }
  }