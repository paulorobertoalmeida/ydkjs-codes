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



function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`); 
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24)); //(((1 * 3) + 5) * 3)


  function printFarmInventory(cows, chicken) {
    let cowString = String(cows);
    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
  }
  printFarmInventory(7, 11); //007


  function printFarmInventory(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
      numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
  }
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(cows, "Chickens");
    printZeroPaddedWithLabel(cows, "Pigs");
  }
  printFarmInventory(7, 11, 3);