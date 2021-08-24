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


// Creating New Arrays from Existing Ones

let cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
let dmpDept = ["Raymond", "Cynthia", "Bryan"];
let itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);



/* 

[ 'Mike',
  'Clayton',
  'Terrill',
  'Danny',
  'Jennifer',
  'Raymond',
  'Cynthia',
  'Bryan' ]
[ 'Raymond',
  'Cynthia',
  'Bryan',
  'Mike',
  'Clayton',
  'Terrill',
  'Danny',
  'Jennifer' ]
*/

// Fixing the error who's in the book
let cis;
let dmp;

cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
dmp = ["Raymond", "Cynthia", "Bryan"];
let itDiv = cis.concat(dmp);
console.log(itDiv);
itDiv = dmp.concat(cis);
console.log(itDiv);

/*
[ 'Mike',
  'Clayton',
  'Terrill',
  'Danny',
  'Jennifer',
  'Raymond',
  'Cynthia',
  'Bryan' ]
[ 'Raymond',
  'Cynthia',
  'Bryan',
  'Mike',
  'Clayton',
  'Terrill',
  'Danny',
  'Jennifer' ]
*/

// Creating New Arrays from Existing Ones
// Splice

let itDiv = ["Mike", " Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
let dmpDept = itDiv.splice(3,3);
let cisDept = itDiv;
console.log(dmpDept);
console.log(cisDept);

/* 

[ 'Raymond', 'Cynthia', 'Danny' ]
[ 'Mike', ' Clayton', 'Terrill', 'Jennifer' ]

*/