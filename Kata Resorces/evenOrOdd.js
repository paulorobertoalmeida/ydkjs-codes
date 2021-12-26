function evenOrOdd(num) { //for string length take string
    if (num % 2 == 0) {//and replace numm with string.length here
      return "even";
    } else {
      return "odd";
    }
  }
  
  console.log(evenOrOdd(30));


// Another way to solve it


const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter((el) => el % 2 == 0);

console.log(even);
