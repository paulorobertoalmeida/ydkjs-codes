// ABSTRACT DATA TYPE
let clear;
//let front;
//let end;
//let prev;
//let next;
//let currPos;
//let getElement;
//let contains;
//let dataStote;
//let insert;
//let length;

//List Class Implementation
function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove; 
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTp= moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

//Append:Adding and element to a list
function append(element) {
  this.dataStore[this.listSize++] = element;
}

//Removing element from a list
function find(element) {
  for (let i = 0; i < dataStore.length; i++) {
    if (this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}

//Finding an element in a List
function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}

//Determining the number of elements in a List
function length() {
  return this.listSize;
}

//Retrieving a list elements
function toString() {
  return this.dataStore;
}

//Inserting and element into a list
function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

//Removing All elements from a list

function clean() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//Determining if a given Value is in a list
function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

/*
let names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

[ 'Cynthia', 'Raymond', 'Barbara' ]
*/
// Traversing a list
function front() {
  this.pos = 0;
}
function end(){
  this.pos = this.listSize-1;
}
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}
function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function getElement() {
  return this.dataStore[this.pos];
}

let names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement()); //Clayton

names.next();
console.log(names.getElement()); // Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); //Cynthia

//Iterating Throught a list
for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
