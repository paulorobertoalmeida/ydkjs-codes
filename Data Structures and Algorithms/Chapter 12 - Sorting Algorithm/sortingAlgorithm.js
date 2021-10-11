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