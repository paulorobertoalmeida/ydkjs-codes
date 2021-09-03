// An array-Based Queue Class Implementation

//Addiding elements
names = [];
names.push("Cynthia");
names.push("Jennifer");
console.log(names);
//[ 'Cynthia', 'Jennifer' ]

//Removing elements
names.shift();
console.log(names)
//[ 'Jennifer' ]

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element); // ads an element
}

function dequeue(element) {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

//display an element
function toString() {
  let reStr= "";
  for (let i = 0; i < this.dataStore.length; i++) {
    reStr += this.dataStore[i] + "\n";
  }
  return reStr;
}

function empty() {
  if(this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

let q = new Queue();
q.enqueue("Merefith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());