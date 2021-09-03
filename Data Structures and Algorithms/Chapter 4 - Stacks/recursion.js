// Recursion

function factorial(n) {
    if(n === 0) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
  
  function fact(n) {
    function Stack(){
      while (n > 1) {
        s.push(n--);
      }
      let product = 1;
      while (s.length() > 0) {
        product *= s.pop();
      }
      return product;
    }
  }
  console.log(factorial(5));
  console.log(fact(5));