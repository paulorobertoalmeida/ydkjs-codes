// Functions as Values
let launchMissiles = function() {
    missileSystem.launch("now");
  };
  if (safeMode) {
    launchMissiles = function() {
      /* Do something */
    }
  }
   
// declararion notation
function square (x){
    return x * x;
}  

// declarararion notation #2
console.log("The future says:", future());

function future() {
  return "youll never have flying cars"
}

