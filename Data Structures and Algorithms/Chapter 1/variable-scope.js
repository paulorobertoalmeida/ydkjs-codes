//Variable Scope

function showScope() {
    return scope;
  }
  
  //let scope = "global";
  //const scope = "global";
  var scope = "global";
  console.log(scope);
  console.log(showScope);
  
  
  /* 
  Result:
  global
  [Function: showScope]
  */

  //Variable Scope: Declaring Second Variable

function showScope() {
    //let scope = "local";
    const scope = "local";
    //var scope = "local"; 
    return scope;
  }
  
  //let scope = "global";
  const scope = "global";
  //var scope = "global";
  console.log(scope);
  console.log(showScope);
  
  
  /* 
  Result:
  global
  [Function: showScope]
  */

  //Variable Scope: Not Declaring Variable Keyword

function showScope() {
    //let scope = "local";
    scope = "local";
    //var scope = "local"; 
    return scope;
  }
  
  //let scope = "global";
  scope = "global";
  //var scope = "global";
  
  console.log(scope);
  console.log(showScope);
  console.log(scope);
  
  /* 
  Result:
  global
  [Function: showScope]
  */