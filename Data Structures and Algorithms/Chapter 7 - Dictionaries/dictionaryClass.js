// Dictionary class

function Dictionary() {
    this.datastore = new Array();

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
