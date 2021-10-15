// Sequential Search

function seqSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == data) {
        return true;
      }
    }
    return false;
}

function dispArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    prompt(arr[i] + " ");
    if (i % 10 == 9) {
      console.log("\n");
    }
  }
  if (i % 10 != 0) {
    console.log("\n");
  }
}

let nums= [];
for (let i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
console.log("Enter a number to search for: ");
let num = parseInt(readline());
console.log();
if (seqSearch(nums, num)) {
  console.log(num + "is in the array.");
}
else {
  console(num + " is not in the array.");
}
console-log();
dispArr(nums);