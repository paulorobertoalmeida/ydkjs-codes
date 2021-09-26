// Maps

let ages = {
    Boris: 39,
    Liang: 22,
    Julia:62
};

console.log(`Julia is ${ages["Júlia"]}`); //Julia is 62

console.log("Is Jack's age know?", "Jack" in ages); //Is Jack's age know? false

console.log("Is toString's age know?", "toString" in ages); //Is toString's age know? true

console.log("toString" in Object.create(null)); //false

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`); //Julia is 62

console.log("Is Jack's age known?", ages.has("Jack")); //s Jack's age known? false

console.log(ages.has("toString")); //false

console.log({x:1}.hasOwnProperty("x")); //true

console.log({x: 1}.hasOwnProperty("toString")); //false


// Polymorphism.

Rabbit.prototype.toString = function() {
  return `a${this.type}rabbit`;
};
console.log(String(blackRabbit));

//Symbols

let sym = Symbol("name");
console.log(sym == Symbol("name")); //false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1,2].toString()); //1,2

console.log([1,2][toStringSymbol]()); //2 cm of blue yarn

let toStringObject = {
  [toStringSymbol]() {return "a jute rope"}
};
console.log(toStringObject[toStringSymbol]()); //a jute rope

// The Iterator Interface.

let okIterator = "Ok"[Symbol.iterator]();
console.log(okIterator.next()); //{ value: 'O', done: false }

console.log(okIterator.next()); // { value: 'k', done: false }

console.log(okIterator.next()); //{ value: undefined, done: true }

class Matrix {
  constructor(width, height, element = (x,y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x,y);
      }
    }
  }

  get(x,y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = { x: this.x,
                  y: this.y,
                  value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false}
  }
}


Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this)
}

let matrix = new Matrix(2,2,(x,y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
  console.log(x,y,value);
} 

/* 
0 0 'value 0, 0'
1 0 'value 1, 0'
0 1 'value 0, 1'
1 1 'value 1, 1' 
*/

// Getters, Setters and Statics

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size); //67

console.log(varyingSize.size); //83
