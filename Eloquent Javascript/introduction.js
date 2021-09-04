// First Program

let total = 0;
let count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total); // Display: 55


// Typographic convertions

function factorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  }
  
  console.log(factorial(8)); //Display: 40320

  // Unary Operator

console.log(typeof 4.5);

console.log(typeof "x");
// Display: number & string

// comparation

console.log(3 > 2); //true
console.log(3 < 2); //false