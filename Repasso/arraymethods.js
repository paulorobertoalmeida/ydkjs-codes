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
