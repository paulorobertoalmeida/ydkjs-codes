// Arrays
// Declaring an Arrays

// Simple way to declare an array
// let numbers = [];

// Declaring an array variable with a set of elements inside
//let numbers = [1, 2, 3, 4, 5];

//Calling an array Constructor
//let numbers = new Array();

//Calling an array with set of elements as arguments to the Constructor
//let numbers = new Array(1, 2, 3, 4, 5);

// Declaring an array by calling the Array constructor with a single argument specifying the length of the array
//let numbers = new Array(10);

//Elements do not all have to be the same type
//let objects = [1, "Joe", true, null]
//console.log(objects);

//console.log(numbers.length);



//Verifying that an object in an array

let numbers = 3;
let arr = [7, 4, 1776];
console.log(Array.isArray(numbers));
console.log(Array.isArray(arr));



/* 
Result:
0
5
0
5
10
[ 1, 'Joe', true, null ]
false
true
*/