// Maps

let ages = {
    Boris: 39,
    Liang: 22,
    Julia:62
};

console.log(`Julia is ${ages["Júlia"]}`); //Julia is 62

console.log("Is Jack's age know?", "Jack" in ages); //Is Jack's age know? false

console.log("Is toString's age know?", "toString" in ages); //Is toString's age know? true