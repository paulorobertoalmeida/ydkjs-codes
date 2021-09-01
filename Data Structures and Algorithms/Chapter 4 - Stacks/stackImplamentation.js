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
  
  