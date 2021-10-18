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

  // Comparing shellsort() algorithms.

  let nums = new CArray(10000);
  let nums.setData();
  let start = new Date().getTime();
  nums.shellsort();
  let stop = new Date().getTime();
  let elapsed = stop - start;
  console.log("Shellsort with dynamic gap sequence: " + elapsed + " ms. "); 

  // A bottom-up Mergesort Javascript implementation.

  function mergeSort(arr) {
    if (arr.length < 2) {
      return;
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
      left = 0;
      right= step;
      while (right + step <= arr.length) {
        mergedArrays (arr, left, left+step, right, right+step);
        left = right + step;
        right = left + step;
      }
      if (right < arr.length) {
        mergedArrays(arr, left, left+step, right, right+step);
      }
      step *= 2;
    }
  }

  function mergeArrays(arr, startLeft, StopRight, starttRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    k = starttRight;
    for (let i = 0; i < (rightArr.length - 1); i++) {
      rightArr[i] = arr[k];
      k++;
    }
    k = startLeft;
    for (let i = 0; i < (leftArr.length - 1); i++) {
      leftArr[i] = arr[k];
      k++;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length -1] = Infinity;
    let m = 0;
    let n = 0;
    for (let k = startLeft; k < stopRight; k++) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      } else {
        arr[k] = rightArr[n];
        n++;
      }
    } 
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
  }

  let nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
  console.log(nums);
  console.log();
  mergeSort(nums);
  console.log();
  console.log(nums);