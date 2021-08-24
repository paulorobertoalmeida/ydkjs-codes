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