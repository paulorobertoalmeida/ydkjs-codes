//Make an array of strings of the names

function namesOnly(arr){
return arr.map(arr => arr.name);
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
  const arrNum = arr.filter((index) => index >= 5);
  return arrNum
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


