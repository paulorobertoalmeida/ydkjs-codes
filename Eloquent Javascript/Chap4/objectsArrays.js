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