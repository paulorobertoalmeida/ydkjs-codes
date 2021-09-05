// Defining a Function

const square = function(x) {
    return x * x;
  }
  
  console.log(square(12)); //144

  const makeNoise = function() {
    console.log("Pling!");
  };
  
  makeNoise();
  
  const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };