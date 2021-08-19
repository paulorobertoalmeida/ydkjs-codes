//Variable Scope: Not Declaring Variable Keyword
// Eventhough Javascript does not have block scope, we pretend like it does when we write for loops.

for ( let i = 1; i <= 10; ++i) {
    console.log("Hello Cowboy! " + i);
  }
  
  /* 
  Result:
  Hello Cowboy! 1
  Hello Cowboy! 2
  Hello Cowboy! 3
  Hello Cowboy! 4
  Hello Cowboy! 5
  Hello Cowboy! 6
  Hello Cowboy! 7
  Hello Cowboy! 8
  Hello Cowboy! 9
  Hello Cowboy! 10
  */