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
  

  // Reduce Exemple 2

function concat(acummulatedString, item) {
    return acummulatedString + item;
  }
  
  let words = ["the ", "quick ", "brown ", "fox! "];
  let sentence = words.reduce(concat);
  //let sentence = words.reduceRight(concat);
  
  console.log(sentence);
  
  /* 
  Result:
  the quick brown fox! 
  */
  