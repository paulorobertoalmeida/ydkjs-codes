// Iterator Function
//forEach

function square(num) {
    console.log(num, num * num);
  }
  let nums = [1,2,3,4,5,6,7,8,9,10];
  nums.forEach(square);
  
  
  
  /* 
  1 1
  2 4
  3 9
  4 16
  5 25
  6 36
  7 49
  8 64
  9 81
  10 100
  */
  
  // Iterator Function
// every()

let nums = [1,2,3,4,5,6,7,8,9,10];

function isEven(num) {
  if (num % 2 == 0) { 
    console.log("This number is even " + num)
  } else {
    console.log("This number is 0dd " + num)
  }
}

let even = nums.forEach(isEven);


/* 
This number is 0dd 1
This number is even 2
This number is 0dd 3
This number is even 4
This number is 0dd 5
This number is even 6
This number is 0dd 7
This number is even 8
This number is 0dd 9
This number is even 10
*/
