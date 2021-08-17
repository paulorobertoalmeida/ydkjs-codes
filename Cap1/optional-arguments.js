//Optional Arguments

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

// Optional Arguments

function power(base, exponet = 2) {
    let result = 1;
    for (let count = 0; count < exponet; count++) {
      result *= base;
    }
    return result;
  }
  
  console.log(power(4));
  
  console.log(power(2, 6));
  

