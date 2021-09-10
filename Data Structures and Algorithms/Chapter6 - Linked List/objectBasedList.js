// Node Class

function Node(element) {
    this.element = element;
    this.next = null;
  }

// Linked List Class

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

function remove(item) {
  let prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}


function findPrevious(item) {
  let currNode = this.head;
  while (!(currNode.next == null) &&
          (currNode.next.element != item)) {
            currNode = currNode.next
          }
          return currNode;
}

function display() {
  let currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next
  }
}
function find(item) {
  let current = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = currNode.next;
  current.next = newNode;
}

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
city.display();
console.log();
cities.remove("Carlisle");
cities.display();

// Doubly Linked lists

function Node(element) {
    this.element = element;
    this.next = next;
    this.previous = null;
}

function insert(newElement, item) {
    let newElement = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function remove(item) { {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return curNode;
}}

function insert(newElement,item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display(){
  let currNode = this.head;
  while(!(currNode.next = null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;

  }
} 


// Exemple 6-1

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var currNode = this.head;;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var currNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

fucntion display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    document.write(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item){
  var currNode = this.head;
  while (!(currNode.previous == null) && (currNode.previous.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

/* main program */

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russelsville", "Conway");
cities.insert("Alma", "Russelsville");
cities.display();
