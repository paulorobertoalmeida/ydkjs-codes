// ABSTRACT DATA TYPE

//List Class Implementation
function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStote = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove; 
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTp= moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
  }
  
  //Append:Adding and element to a list
  function append(element) {
    this.dataStote[this.listSize++] = element;
  }
  
  //Removing element from a list
  function find(element) {
    for (let i = 0; i < dataStote.length; i++) {
      if (this.dataStote[i] == element){
        return i;
      }
    }
    return -1;
  }