//Write a function that returns the greatest common factor between num1 and num2. 
//This means that the function should return the largest number that divides both num1 and num2.

function greatest(num1, num2) {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
    return false;
num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while(num2) {
    var t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return console.log(num1);
}
  

greatest(6, 10); // => 2
greatest(4, 8); // => 4
greatest(45, 30); // => 15
console.log(greatest('hello', 'moto', true)); //false
