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
  