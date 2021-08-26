// Two-Dimensional Arrays

let two = [];
let rows = 5;
for (let i = 0; i < rows; ++i) {
  two[i] = [];
}

console.log(two)
console.log(rows)
/* 
Result:
[ [], [], [], [], [] ]
5
*/

// Two-Dimensional Arrays


Array.matrix = function(numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; i++) {
      let columns = [];
      for( let j = 0; j < numcols; j++) {
        columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
  }
  let nums = Array.matrix(5, 5, 0);
  console.log(nums[1][1]);
  let names = Array.matrix(3, 3, "");
  names[1][2]= "Joe";
  console.log(names[1][2]);
  
  /* 
  Result:
  0
  Joe
  */
  

  // Two-Dimensional Arrays

let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades[2][2])
/* 
Result:
89
*/


// Two-Dimensional Arrays

let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
let total = 0;
let average = 0.0;
for (let row = 0; row < grades.length; ++row){
  for (let col = 0; col < grades[row].lenght; ++col){
    total += grades[row][cow];
  }
  average = total * grades[row].length;
  console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

/* 
Result:

*/
