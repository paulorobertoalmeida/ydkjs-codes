// A HAsh Table Class 

function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}
function put(data) {
    var total = 0;
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function simpleHash(data) {
    var total = 0;for (var i = 0; i< data.length; i++) {
        total += data.charCodeAt(i);
    }
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


//Choosing a Hash Function

function simpleHash(data) {
    var total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

// Simple hash function 

var someNames= ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
    hTable.add(someNames[i]);
}
hTable.showDistro();

