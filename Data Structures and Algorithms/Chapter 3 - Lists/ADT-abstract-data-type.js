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

  //Finding an element in a List
function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStote.splice(foundAt,1);
      --this.listSize;
      return true;
    }
    return false;
  }
  
  //Determining the number of elements in a List
  function length() {
    return this.listSize;
  }

  //Retrieving a list elements
function toString() {
    return this.dataStote;
  }
  
  let names = new List();
  names.append("Cynthia");
  names.append("Raymond");
  names.append("Barbara");
  console.log(names.toString());
  names.remove("Raymond");
  console.log(names.toString());
  
  //Inserting and element into a list
function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStote.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }
  
  /* 
  Result:
  [ 'Cynthia', 'Raymond', 'Barbara' ]
  */