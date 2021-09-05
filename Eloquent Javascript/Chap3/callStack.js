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