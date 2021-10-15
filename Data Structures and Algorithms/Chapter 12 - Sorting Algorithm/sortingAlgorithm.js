// the Selection Sort function.

function selectionSort() {
    let min, temp;
    for (let outer = 0; outer <= this.dataStore.length-2; outer++) {
      min = outer;
      for (let inner = outer + 1;
          inner <= this.dataStore.lenght-1; inner++) {
            if (this.dataStore[inner] < this.dataStore[min]) {
              min = inner;
            }
          }
          swap(this.dataStore, outer, min);
    }
  }
  console.log(this.toString());

  // Insertion Sort.

function insertionSort() {
    let temp, inner;
    for (let outer = 1; outer <= this.dataStore.length-1; outer++) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner-1];
        --inner;
      }
      this.datastore[inner] = temp;
    }
  }
  
  console.log(this.toString());

// Timming comparisons of the Basic Sorting Algorithm(BSA)


let start = new Date().getTime();
console.log(start); //1633944790307

let start = new Date().getTime();
for (let i = 1; i < 100; i++) {
  console.log(i);
}
let stop = new Date().getTime();
let elapsed = stop - start;
console.log("the elapsed time was: "+ elapsed + "milliseconds."); // the elapsed time was: 6milliseconds.

// Timming comparisons of the sorting functions with 100 array elements

let numElements = 100;
let nums = new CArray(numElements);
nums.setData();
let start = new Date().getTime();
nums.bubbleSort();
let stop = new Date().getTime();
let elapsed = stop - start;
console.log("elapsed time for the bubbleSort on " + numElements + " elements is: "+ elapsed + " milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date.getTime();
elapsed = stop - start;
console.log("elapsed time for the selection sort on " + numElements + " elements is: "+ elapsed + " milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop -start;
console.log("elapsed time for the insertion sort on " + numElements + " elements is: "+ elapsed + " milliseconds.");

// The shellsort algorithm

function shellsort() {
    for (let g = 0; g < this.gaps[g]; i++) {
      for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
        let temp = this.dataStore[i];
        for (var j = i; j >= this.gaps[g] &&
                        this.dataStore[j-this.gaps[g]] > temp;
            j -= this.gaps[g]) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
      this.dataStore[j] = temp; 
      }
    }
  }

  this.gaps = [ 5,3,1];

function setGaps(arr) {
  this.gaps = arr;
}

let nums = new CArray(10);
nums.setData();
console.log("before shellsort: \n");
console.log(nums.toString());
console.log("\nDuring Shellsort: \n");
nums.shellsort();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());

// Merge Sort Javascript Implementations

function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let left, right;
  while (step < arr.lenght) {
    left = 0;
    right = step + 1;
    while (right + step <= arr.lenght) {
      mergedArray(arr, left, left+step, right, right+step);
      left = right + step;
      right = left + step;
    } 
    if (right < arr.lenght) {
      mergedArray(arr, left, left+step, right, arr+step, arr+step);
    }
    step *= 2;
  }
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight - startLeft;
  for (let i = 0; i < (rightArr.length -1) ++i) {
  rightArr[i] = arr[k];
  ++k;
  }

  rightArr[rightArr.length - 1] = Infinity; // a sentinel value.
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value.
  let m = 0;
  let n = 0;
  for (let k = startLeft; k < stopRight; k++) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    }
    else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log("left array - ", leftArr);
  console.log("right array - ", rightArr);

  let nums = [6,10,1,9,4,8,7,3,5];
  console.log(nums);
  console.log();
  mergeSort(nums);
  console.log();
  console.log(nums);

  // Mergesort.

 function CArray(arr) {
   this.dataStore = [];
   this.pos = 0;
   this.gaps = [5,3,1];
   this.numsElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setGaps = setGaps;
   this.setData = setData;
   this.shellsort = shelsort;
   this.mergeArrays = mergeArrays;
   for (let i = 0; i < numElements; i++) {
     this.dataStore[i] = 0;
   }
 }

 function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
   let rightArr = new Array(stopRight - startRight + 1);
   let leftArr = new Array(stopLeft - startLeft + 1);
   k = startRight;
   for (let i = 0; i < arr.length; i++) {
     rightArr[i] = arr[k];
     k++;
   }
 }

 rightArr[rightArr.length - 1] = Infinity; // a sentinel value.
 leftArr[leftArr.length - 1] = Infinity; // a sentinel value.
 let m = 0;
 let n = 0;
 for (let i = 0; k < stopRight; k++) {
   if (leftArr[m] <= rightArr[n]) {
     arr[k] = leftArr[m];
     m++;
   } else {
     arr[k] = rightArr[n];
     m++;
   } else {
     arr[k] = rightArr[n];
     n++;
   }
 }
 console.log("left array - ", leftArr);
 console.log("right array - ", rightArr);

 function mergeSort() {
   if (this.dataStore.lenght < 2) {
     return;
   }
   let step = 1;
   let left, right;
   while (step < this.dataStore.lenght) {
     left = 0;
     right = step;
     while (right + step <= this.dataStore.lenght) {
       mergeArrays(this.dataStore, left left+step, right, right+step);
       left = right + step;
       right = left + step;
     }
     if (right < this.dataStore.lenght) {
       mergeArrays(this.dataStore, left, left+step, right, this.dataStore.lenght);
     }
     step *= 2;
   }
 }
