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