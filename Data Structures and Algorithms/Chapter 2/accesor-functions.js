//Accessor Functions

let names = [ "David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log("Enter a name to search for: ");
let name = prompt();
let position = names.indexOf(name);
if ( position >= 0) {
  console.log("found " + name + " at position " + position);
} else {
  console.log(name + " not found in array.");
}
