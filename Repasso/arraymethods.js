// forEach()  
const arr = [5,6,7,8,9];

  arr.forEach(item => {
    console.log(item); // output: 6 7 8 9
  });

// includes()
  const arr = [1, 2, 3, 4, 5, 6];

  arr.includes(2); // output: true
  arr.includes(7); // output: false

// filtered()
  const arr = [1, 2, 3, 4, 5, 6];

  // item(s) greater than 3
  const filtered = arr.filter(num => num > 3);
  console.log(filtered); // output: [4, 5, 6]

  console.log(arr); // output: [1, 2, 3, 4, 5, 6]

// map()

  const arr = [1, 2, 3, 4, 5, 6];

  // add one to every element
  const oneAdded = arr.map(num => num + 1);
  console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

  console.log(arr); // output: [1, 2, 3, 4, 5, 6]

// reduce()
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);

// some()
  const arr = [1, 2, 3, 4, 5, 6];

  // at least one element is greater than 4?
  const largeNum = arr.some(num => num > 4);
  console.log(largeNum); // output: true

  // at least one element is less than or equal to 0?
  const smallNum = arr.some(num => num <= 0);
  console.log(smallNum); // output: false
  console.log(sum); // 21


// every()
  const arr = [1, 2, 3, 4, 5, 6];

  // all elements are greater than 4
  const greaterFour = arr.every(num => num > 4);
  console.log(greaterFour); // output: false

  // all elements are less than 10
  const lessTen = arr.every(num => num < 10);
  console.log(lessTen); // output: true
