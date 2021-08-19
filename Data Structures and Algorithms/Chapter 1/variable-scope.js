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