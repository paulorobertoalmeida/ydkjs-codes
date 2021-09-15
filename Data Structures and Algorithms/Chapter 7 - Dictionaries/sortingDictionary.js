//Sorting 

let a = new Array();
a[0] = 'Mike';
a[1] = 'David';
console.log(a);
a.sort();
console.log(a);

// exelple 1
function showAll() {
    for each(var key in Object.keys(this.datastore).sort()) {
        console.log(key + ' -> ' + this.datastore[key]);
    }
}
