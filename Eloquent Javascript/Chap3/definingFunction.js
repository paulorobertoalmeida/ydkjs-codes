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

// Binding Scopes

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); //60
}
console.log(x + z); //40