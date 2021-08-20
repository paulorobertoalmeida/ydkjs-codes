// Acessing and writing Array elements
/*
let nums = [];
for (let i = 0; i < 10; ++i) {
  nums[i] = i+1;
}

console.log(nums);
*/

// Accesing elements using the [] operator
/*
let numbers = [1, 2, 3, 4, 5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers      [3] + numbers[4];
console.log(sum);
*/

// Accesing an array using for loop
let numbers = [1, 2, 3, 5, 8, 13, 21];
let sum = 0;
for (let i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
console.log(sum);


/*
Result:
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
15
53
*/