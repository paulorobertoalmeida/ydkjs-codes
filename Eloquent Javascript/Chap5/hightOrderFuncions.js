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


//Filtering ARRAYS

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));


//Transforming with map

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScript = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScript, s => s.name));

// Summarizing with reduce

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0)); //10

console.log([1,2,3,4].reduce((a,b) => a + b)); //10


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// COmposability

