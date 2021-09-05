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

// Nested Scopes

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeans");
    ingredient(0.25, "cup","tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  let launchMissiles = function() {
    missileSystem.launch("now");
  };
  if (safeMode){
    launchMissiles = function() {/* do nothing*/};
  }