// Using the Queue

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue(){
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(male, females) {
  let names = read("...").split("\n");
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].trim();
  }
  for (let i = 0; i < names.length; i++) {
    let dancer = names[i].split(" ");
    let sex = dancer[0];
    let name = dancer[1];
    if (sex == "F" || "f") {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex))
    }
  }
}

function dance(males, females) {
  console.log("the dance partners are: \n");
  while (!females.empty() && males.empty()) {
    person = females.dequeue();
    console.log("female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
  }
  console.log();
}

//testing a program
let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
  console.log(maleDancers.front().name + " is waiting to dance.");
}

// Radix Sort

function distribute(nums, queues, n, digit) {
  for(let i = 0; i< n; i++) {
    if (digit ==1) {
      queues[nums[i]%10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i]) / 10].enqueues(nums[i]);
    }
  }
}  

function collect(queues, nums) {
  let i = 0;
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      num[i++] = queues[digit].dequeus();
    }
  }
}

function dispArray(arr) {
  for (let i = 0; i< arr.length; i++) {
    console.log(arr[i] + " ");
  }
}
