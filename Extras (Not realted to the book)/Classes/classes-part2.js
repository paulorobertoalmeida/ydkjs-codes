//Species
// MinhaArray class -> Array constructor -> species property ->

class MinhaArray extends Array {
    // Sobrescreve species para o construtor da classe pai Array
    static get [Symbol.species]() { return Array; }
 }
 
 let a = new MinhaArray(1,2,3);
 let mapped = a.map(x => x * x);
 
 console.log(mapped instanceof MinhaArray); // false
 console.log(mapped instanceof Array); // true