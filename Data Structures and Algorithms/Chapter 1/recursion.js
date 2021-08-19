// Recursion
// When a function is called recursively, the results of the function`s computation are temporarily suspended while the recursion is in progress.

function factorial(number) {
    if (number == 1) {
      return number;
    } else {
      return number * factorial(number - 1);
    }
  }
  console.log(factorial(5));
  
  
  /* 
  Result:
  120
  */