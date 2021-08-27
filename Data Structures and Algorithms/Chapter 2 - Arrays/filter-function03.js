//Using Filter w/ Strings

function after(str) {
    if (str.indexOf("cie") > -1) {
      return true;
    }
    return false;
  }
  
  let words = ["recieve", "decieve", "percieve", "deceit", "concieve"];
  let misspelled = words.filter(after);
  console.log(misspelled);
  
  
  /* 
  Result:
  [ 'recieve', 'decieve', 'percieve', 'concieve' ]
  */