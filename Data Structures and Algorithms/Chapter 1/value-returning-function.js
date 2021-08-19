//A value-returning function
//This exemple demonstrates how value-returning functions are defined and called in javascript.

function factorial(number){
    let product = 1;
    for (let i = number; i >= 1; --i) {
      product *= i;
    }
    return product;
  }
  console.log(factorial(4));
  console.log(factorial(5));
  console.log(factorial(10));
  /* 
  Result:
  24
  120
  3628800
  */

//A subprocedure or void function in javascript
//this exemple illustrates how write a function in javascript that is used not for its return value, but for the operations it performs.

function curve(arr, amount) {
    for (let i = 0; i < arr.length; i++){
      arr[i] += amount;
    }
  }
  
  let grades = [77, 73, 74, 81, 90];
  curve(grades, 5);
  console.log(grades);
  
  /* 
  Result:
  [ 82, 78, 79, 86, 95 ]
  */