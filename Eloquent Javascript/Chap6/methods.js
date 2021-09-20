//Methods

let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive"); //The rabbit says 'I'm alive'

//Exemple 1

function speak(line) {
    console.log(`The '${thing.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late its getting!");

function normilize() {
    console.log(this.coords.map(n => n / this.lenght));
}
normilize.call({coords: [0,2,3], lenght: 5}); //[0, 0.4, 0.6]


// Prototypes

let empty = {};
console.log(empty.toString); //[Function: toString]
console.log(empty.toString()); //[object Object]


console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); //null

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // true
console.log(Object.getPrototypeOf([]) == Array.prototype); //true

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
//The killer rabbit says 'SKREEEE!'



// CLASSES

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) ==
Function.prototype); //true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype); //true

// CLASS NOTATION

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("black");