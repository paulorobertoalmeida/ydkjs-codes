// Mutator Function
// Push - Adds an element to the end of an array

let nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.push(6);
console.log(nums)

/* 
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]
*/

// Mutator Function
// Push - Adds an element to the end of an array
// Using length property to see that its not so intuitive

let nums = [1, 2, 3, 4, 5];
console.log(nums);
nums[nums.length] = 6;
console.log(nums)

/* 
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]
*/

// Mutator Function
// Pop - Array has to be shifted up one position before the new data is added.

let nums = [1, 2, 3, 4, 5];
let newnum = 0;
let N = nums.length;
for (let i = N; i >= 0; --i) {
  nums[i] = nums[i-1];
}
nums[0] = newnum;
console.log(nums);

/* 
[ 0, 1, 2, 3, 4, 5 ]
*/

// Mutator Function
// Unshift is the mutator for adding array elements to the beginning of an array

let nums = [ 2, 3, 4, 5];
console.log(nums);
let newnum = 1;
nums.unshift(newnum);
console.log(nums);
nums = [ 3, 4, 5];
nums.unshift(newnum, 1, 2); 
console.log(nums);

/* 
[ 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 1, 2, 3, 4, 5 ]
*/