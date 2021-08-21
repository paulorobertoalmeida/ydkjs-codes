// Agregate Array Operations

let nums = [];
for ( let i = 0; i < 100; ++i) {
  nums[i] = i+1;
}

let samenums = nums;
nums[0]= 400;
console.log(samenums[0]); // this is called shallow copy



/* 
Result: 
400
*/