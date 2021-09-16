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

//Choosing a Hash Function

function simpleHash(data) {
    var total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

