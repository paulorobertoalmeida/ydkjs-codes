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

// Seaching for a value

let names = [ "David","Mike", "Cynthia", "Raymond", "Clayton", "Jennifer"];
let name = "Mike";
let firstPos = names.indexOf(name);
console.log("First found "+ name + " at position " + firstPos);
let lastPos = names.lastIndexOf(name);
console.log("Last found "+ name + " at position " + lastPos);


//String Representations of Arrays

let names = [ "David", "Cynthia", "Raymond", "Clayton","Mike", "Jennifer"];
let namestr = names.join();
console.log(namestr);
namestr = names.toString();
console.log(namestr);

/* 
David,Cynthia,Raymond,Clayton,Mike,Jennifer
David,Cynthia,Raymond,Clayton,Mike,Jennifer
*/