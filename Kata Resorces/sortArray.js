// Sort an array from smallest number to largest

function leastToGreatest(arr) {
  const sortOrder = arr.sort((a, b) => a -b)
  return sortOrder;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 


