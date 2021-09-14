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