//A value-returning function

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