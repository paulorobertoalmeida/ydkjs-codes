// Data Sets

let listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]);
//5

console.log(listOfNumbers[0]);
//2

console.log(listOfNumbers[2 -1]);
//3

// PRoperties
null.lenght;
//TypeError: Cannot read properties of null (reading 'lenght')

// Methods

let doh = "Doh";
console.log(typeof doh.toUpperCase);
//function

console.log(doh.toLocaleUpperCase());
//DOH

let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
//[ 1, 2, 3, 4, 5 ]
console.log(sequence.pop());
//5
console.log(sequence);
//[ 1, 2, 3, 4 ]


// Objects

let day1 = {
    squirrel: false,
    events: ["word", "touched tree", "pizza","running"]
  };
  console.log(day1.squirrel);
  //false
  console.log(day1.wolf)
  //undefined
  day1.wolf = false;
  //false
  console.log(day1.wolf);

  let descriotions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  }

let anObject = {left: 1, right: 2}
console.log(anObject.left);
//1
delete anObject.left;
console.log(anObject.left);
//undefied
console.log("left" in anObject);
//false
console.log("right" in anObject);
//true

console.log(Object.keys({x: 0, y: 0, z: 2}) ); //[ 'x', 'y', 'z' ]

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA); //{ a: 1, b: 3, c: 4 }

let journal = [
    {events: ["work", "touched tree",       "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},
  ];

  //Mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); //true

console.log(object1 == object3); //false

object1.value = 15;
console.log(object2.value); //15

console.log(object3.value); //10

const score = {visitors: 0 home: 0};
score.visitors = 1;
score = {visitors: 1, home: 1};