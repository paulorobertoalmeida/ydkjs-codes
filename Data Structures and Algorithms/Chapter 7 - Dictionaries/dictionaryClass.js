// Dictionary class

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    delete this.datastore[key];
}

function showAll() {
    for each (var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

// Auxiliary functions

function count() {
    var n = 0;
    for each (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
} 

var nums() = new Array();
nums[0] = 1;
nums[1] = 2;
console.log(nums.length);
var pbook = new Array();
pbook["David"] = 1;
pbook["Jennifer"] = 2;
console.log(pbook.length);

function clear() {
    for each (let key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

//Uploaded Dictionary class definition

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for each(var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for each(var key in Object.keys(this.datastore)) {
        n++;
    }
    return n;
}

function clear() {
    for each(var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}