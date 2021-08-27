// CREATING ARRAY FROM STRING

let sentence = "the quick brown fox jump over the lazy dog";
let words = sentence.split(" ");
for (let i = 0; i < words.length; ++i){
  console.log("word " + i + ": " + words[i]); 
}


/*
Result:
word 0: the
word 1: quick
word 2: brown
word 3: fox
word 4: jump
word 5: over
word 6: the
word 7: lazy
word 8: dog
*/