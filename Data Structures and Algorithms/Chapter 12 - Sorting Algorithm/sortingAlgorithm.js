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
console.log("the elapsed time was: "+ elapsed + "milliseconds.");