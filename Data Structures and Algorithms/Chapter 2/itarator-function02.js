//Iterator Functions That Returns a New Array Using strings

function first(word) {
    return word[0];
  }
  
  let words = ["for", "your", "information"];
  let acronym = words.map(first);
  console.log(acronym.join("")); 
  
  //Returns: fyi