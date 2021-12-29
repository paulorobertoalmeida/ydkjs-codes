// Sort an array from smallest number to largest

function leastToGreatest(arr) {
  const sortOrder = arr.sort((a, b) => a -b)
  return sortOrder;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

// Sort an array from largest number to smallest

function greatestToLeast(arr) {
  const sortInvertOrder = arr.sort((b , a) => a - b);
  return sortInvertOrder
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 


// Sort an array from shortest string to longest

function lengthSort(arr) {
  const shortToLong = arr.sort((a, b) => a.localeCompare(b));

return shortToLong
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

// Sort an array alphabetically

function alphabetical(arr) {
  const alphabeticalOrder = arr.sort((a , b) => a.localeCompare(b));
  return alphabeticalOrder
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]


// Sort the objects in the array by age

function byAge(arr){
  const sortingByAge = arr.sort((a, b) => a.age - b.age)
  return sortingByAge
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]


