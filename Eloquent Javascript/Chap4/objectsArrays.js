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