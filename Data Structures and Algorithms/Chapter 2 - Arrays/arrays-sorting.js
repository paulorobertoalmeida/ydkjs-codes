// Put Array Elements in Order
//reverse()

let nums = [ 1,2,3,4,5];
nums.reverse();
console.log(nums);

/* 
[ 5, 4, 3, 2, 1 ]
*/

// Put Array Elements in Order
// sort()

let names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names)

/* 
[ 'Bryan', 'Clayton', 'Cynthia', 'David', 'Mike', 'Raymond' ]
*/

// Put Array Elements in Order
// sort()

let nums = [ 3,1, 5, 8, 10, 15, 57,48];
nums.sort();
console.log(nums);

function compare(num1, num2) {
  return num1 - num2;
}

nums.sort(compare);
console.log(nums)

/* 
[ 1, 10, 15, 3, 48, 5, 57, 8 ]
[ 1, 3, 5, 8, 10, 15, 48, 57 ]
*/
