// Call Stack

function green(who) {
    console.log("Hello " + who);
  }
  greet("Harry");
  console.log("Bye");
  

// Optional Arguments

function square(x) {return x * x; }
console.log(square(4, true, "hedgehog")); //16  
  