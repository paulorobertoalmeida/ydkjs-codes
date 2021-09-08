// Node Class

function Node(element) {
    this.element = element;
    this.next = null;
  }

// Linked List Class

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
  }  
