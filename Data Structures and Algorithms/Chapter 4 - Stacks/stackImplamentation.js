// Stack Implementation

function Stack() {
    this.dataStack = [];
    this.top = 0;
    this.push = push;
    this.peek = peek;
    this.clear = clear;
    this.pop = pop;
    this.length = length;
  }
  
  function push(element) {
    this.dataStack[this.top++] = element;
  }
  
  //      3
  //    2 2
  //  1 1 1
  
  function peek() {
    return this.dataStack[this.top-1];
  }
  
  //      3*peek
  //    2 2
  //  1 1 1
  
  function pop() {
    return this.dataStack[--this.top];
  }
  
  //      
  //      2
  //    1 1
  
  function clear() {
    this.top = 0;
  }
  
  function length() {
    return this.top;
  }
  
  let s = new Stack();
  s.push("David");
  s.push("Raymond");
  s.push("Bryan");
  console.log("length: " +s.length());
  console.log(s.peek());
  let popped = s.pop();
  console.log("The popped element is: " + popped);
  console.log(s.peek());
  s.clear();
  console.log("length: "+ s.length());
  console.log(s.peek());
  s.push("Clayton");
  console.log(s.peek());
  
  /*
  length: 3
  Bryan
  The popped element is: Bryan
  Raymond
  length: 0
  undefined
  Clayton
   */