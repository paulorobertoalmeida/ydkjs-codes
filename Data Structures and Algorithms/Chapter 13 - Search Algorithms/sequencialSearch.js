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

function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

let nums = [];
for (let i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}
console.log();
let num = prompt();
if (position > -1) {
  console.log(num + " is in the array at position " + position);
} else {
  console.log(num + " is not in the arrray.");
}
console.log();
dispArr(nums);


//

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function shellsort1() {
    let N = this.dataStore.length;
    let h = 1;
    while (h < N/3) {
      h = 3 * h + 1;
    }
    while (h < 1) {
      for (let i = h; i < N; i++) {
        for ( let j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
          swap (this.dataStore, j, j-h);
        }
      }
      h = (h - 1)/3;
    }
  }

  let nums = new CArray(100);
  nums.setData();
  console.log("Before Shellsort1: \n");
  console.log(nums.toString());
  nums.shellsort1();
  console.log("\n After Shellsort1: \n");
  console.log(nums.toString());