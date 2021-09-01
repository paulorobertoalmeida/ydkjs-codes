// Stack Implementation

function Stack() {
    this.dataStack = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
  }
  function push(element) {
    this.dataStack[this.top++] = element;
  }
  
  function pop() {
    return this.dataStack[--this.top];
  }
  
  //      
  //      2
  //    1 1
  
  function peek() {
    returns this.dataStack[this.top -1];
  }
  
  //      3*peek
  //    2 2
  //  1 1 1
  
  function length() {
    return this.top;
  }
  