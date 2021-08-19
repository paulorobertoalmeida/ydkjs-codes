//Decision Constructs

let mid = 25;
let high = 50;
let low = 1;
let current = 13;
let found = -1;
if (current < mid) {
  mid = (current - low) /2
}

console.log(mid);

//The if-else statement

let mid = 25;
let high = 50;
let low = 1;
let current = 13;
let found = -1;
if (current > mid) {
  mid = (current - low) /2
} else {
  mid = (current + high) /2
}
console.log(mid);

/* 
Result:
6
31.5
*/

//the if- else if statement

let mid = 25;
let high = 50;
let low = 1;
let current = 13;
let found = -1;
if (current < mid) {
  mid = (current - low) / 2;
} else if (current > mid) {
  mid = (current + high) / 2;
} else {
  mid = (current + high) / 2;
}
console.log(mid);

/* 
Result:
6
*/