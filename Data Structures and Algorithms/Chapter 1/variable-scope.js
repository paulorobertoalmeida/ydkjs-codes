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