// Call Stack

function green(who) {
    console.log("Hello " + who);
  }
  greet("Harry");
  console.log("Bye");
  

// Optional Arguments

function square(x) {return x * x; }
console.log(square(4, true, "hedgehog")); //16  
  

function minus(a, b) {
    if (b === undefined) return -a;
    else return a -b;
  }
  
  console.log(minus(10)); //-10
  console.log(minus(10,5)); //5


  function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  console.log(power(4)); //16
  console.log(power(2,6)); //64  


// Closure

function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1()); //1
  console.log(wrap2()); //2  

  function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);
  console.log(twice(5)); //10

  // Recursion

function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent -1);
    }
  }
  console.log(power(2, 3)); //8