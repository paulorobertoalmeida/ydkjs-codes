// Functions as Values
let launchMissiles = function() {
    missileSystem.launch("now");
  };
  if (safeMode) {
    launchMissiles = function() {
      /* Do something */
    }
  }
   
// 
function square (x){
    return x * x;
}  