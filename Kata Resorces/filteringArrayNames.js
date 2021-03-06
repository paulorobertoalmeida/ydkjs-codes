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


// Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
  const evenNumber = arr.filter((index) => index % 2 === 0)
  return evenNumber
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
  const fewerLetters = arr.filter((index) => index.length <= 5);
  return fewerLetters;
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
  const clubMembers = arr.filter((index) => index.member === true)
  return clubMembers
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]


// Make a filtered list of all the people who are old enough to see The Matrix (older than 18);

function ofAge(arr){
  const ageLimit = arr.filter((index) => index.age >= 18);
  return ageLimit
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
