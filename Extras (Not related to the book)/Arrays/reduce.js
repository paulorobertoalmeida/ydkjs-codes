// Reduce

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
  }
  
  let nums = [1,2,3,4,5,6,7,8,9,10];
  let sum = nums.reduce(add);
  console.log(sum);
  
  /* 
  Result:
  55
  */
  