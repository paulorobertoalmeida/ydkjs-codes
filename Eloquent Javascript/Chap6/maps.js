// Maps

let ages = {
    Boris: 39,
    Liang: 22,
    Julia:62
};

console.log(`Julia is ${ages["Júlia"]}`); //Julia is 62

console.log("Is Jack's age know?", "Jack" in ages); //Is Jack's age know? false

console.log("Is toString's age know?", "toString" in ages); //Is toString's age know? true

console.log("toString" in Object.create(null)); //false

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`); //Julia is 62

console.log("Is Jack's age known?", ages.has("Jack")); //s Jack's age known? false

console.log(ages.has("toString")); //false

console.log({x:1}.hasOwnProperty("x")); //true

console.log({x: 1}.hasOwnProperty("toString")); //false


// Polymorphism.

Rabbit.prototype.toString = function() {
  return `a${this.type}rabbit`;
};
console.log(String(blackRabbit));
