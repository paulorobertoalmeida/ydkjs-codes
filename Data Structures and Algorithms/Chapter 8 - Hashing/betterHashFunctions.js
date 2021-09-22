
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}
function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i< data.length; i++) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data.length " -> " + total);
    return total % this.table.length;
}
function showDistro(){
    var n = 0;
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i]. != undefined) {
            console.log(i + " : " + this.table[i]);
        }
    }
}


function betterHashFunctions(string, array) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total > 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
}

var someNames= ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
    hTable.add(someNames[i]);
}

hTable.showDistro();

// Hash Integer Keys

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function genStuData(arr) {
  for (let i = 0; i < arr.length; i++) {
    var num = "";
    for (let j = 1; j <= 9; i++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
}


// Hashing Integer keys

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
  for (let i = 0; i < arr.length; i++) {
    var num = "";
    for (let j = 1; j <= 9; j++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
}

load();
let numStudents= 10;
let arrSize= 97;
let idLen = 9;
let students = new Arrays(numStudents);
genStuData(students);
console.log("Student data: \n");
let hTable = new HashTable();
for (let i = 0; i < students.length; i++) {
  hTable.put(students[i]);
}
hTable.showDistro();


// Storing and Retrieving Data in a Hash Table

function put(key, data) {
  let pos = this.betterHash(key);
  this.table[pos] = data;
}

function get(key) {
  return this.table[this.betterHash(key)];
}

let pnumber = new HasTable();
let name, number;
for (let i = 0; i < 3; i++) {
  console.log("Enter a name (space to quit): ");
  name = prompt();
  console.log("Enter a name: ");
  number = prompt();
}
name = "";
console.log("Name for number (Enter quit to stop): ");
while (name != "quit") {
  name = prompt();
  if (name == "quit") {
    break;
  }
  console.log(name + " s number is " + pnumber.get(name));
  prompt("Name for number (Enter quit to stop): ");
}

