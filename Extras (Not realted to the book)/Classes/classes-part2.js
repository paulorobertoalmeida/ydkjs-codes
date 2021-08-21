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

 
 
 // Calling Father Class using super
 // Gato class -> nome parameter -> this.nome property -> falar() method ->
 class Gato {
    constructor(nome) {
       this.nome = nome;
    }
 
    falar() {
       console.log(this.nome + ' faça barulho.');
    }
 }
 
 class Leao extends Gato {
    falar() {
       super.falar();
       console.log(this.nome + ' roars.');
    }
 }
 
 let leao = new Leao('Fuzzy');
 leao.falar();