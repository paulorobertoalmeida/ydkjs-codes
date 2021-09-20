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