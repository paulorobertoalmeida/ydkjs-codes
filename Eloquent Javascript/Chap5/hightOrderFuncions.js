// High-Order Functions

let total = 0;
let count = 1;
while (count <= 10) {
  total += count;
  count += 1;
} 
console.log(total); //55

console.log(sum(range(1, 10)));

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  /* 
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  */

  function repeat(n, action) {
    for (let i= 0; i < n; i++) {
      action(1);
    }
  }
  repeat(3, console.log); //1,1,1

let labels = [];
repeat(5, i => {
  labels.push('Unit `${i+ 1}`');
});
console.log(labels);
/*
1
1
1
[ 'Unit ${i+ 1}',
  'Unit ${i+ 1}',
  'Unit ${i+ 1}',
  'Unit ${i+ 1}',
  'Unit ${i+ 1}' ]
*/

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("calling with", args, ", returned", result);
        return result;
    }
}
noisy(Math.min)(3,2,1);
/* 
calling with (3) [3, 2, 1]
VM224:6 calling with (3) [3, 2, 1] , returned 1
*/

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); //true

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is not even");
    });
});


["A","B"].forEach(l => console.log(l)); //A, B  
//l for letter