
// chapter 9 Sets

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subsect = subsect;
    this.difference = difference;
    this.show = show;
}
// function add()

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

// function remove()

function remove(data) {
    let pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

// Using Set class

let names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
  console.log("Mike added")
} else {
  console.log("Cant add Mike, must already be in set");
}
console.log(names.show());
let removed = "Mike";
if (names.remove(removed)) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed");
} names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
  console.log(remove + " remove.")
}

// More Set Operations

function contains(data) {
    if (his.dataStore.indexOf(data) > -1) {
      return true;
    } else {
      return false;
    }
  }
  
  function union(set) {
    var tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])){
        tempSet.dataStore.push(set.dataStore[i];
      }
    }
    return tempSet;
  }
  
  var cis = new Set();
  cis.add("Mike");
  cis.add("Clayton");
  cis.add("Jennifer");
  cis.add("Raymond");
  let dmp = new Set();
  dmp.add("Raymond");
  dmp.add("Cynthia");
  dmp("Jonathan");
  let it = new Set();
  it = cis.union(dmp);
  console.log(it.show());
    

//Compounding the intersection of two sets

  function intersect(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore[i]) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      } 
    }
    return tempSet;
  }
  
  let cis = new Set();
  cis.add("Mike");
  cis.add("Clayton");
  cis.add("Jennifer");
  cis.add("Raymond");
  let dmp = new Set();
  dmp.add("Raymond");
  dmp.add("Clayton");
  dmp.add("Bryan");
  let inter = cis.intersect(dmp);
  console.log(inter.show());

  function subset(set) {
    if (this.size() > set.size()) {
      return false;
    }
    else{
      for each (let member in this.dataStore) {
        if (!set.contains(member)) {
          return false;
        }
      }
    }
    return true;
  }

  function size() {
    return this.dataStore.length;
  }
  let it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
let dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
  console.log("DMP is not a subset of IT")
}


function difference(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

let cis = new Set();
let it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
cis.add("Jonathan");
cis.add("Terrill");
cis.add("Raymond");
let diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show + "]" );



function Vertex(label) {
  this.label = label;
}

//Building a Graph.

function Graph(v){
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices.length; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.toString = toString;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices.length; i++) {
    console.log(i + " -> ");
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) 
        console.log(this.adj[i][j] + " ");
    }
    console.log();
  }
}
 
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i + " -> ");
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] != undefined)
        console.log(this.adj[i[j]][j] + " ");
    }
    console.log();
  }
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

this.marked = [];
for (let i = 0; i < this.vertices; i++) {
  this.marked[i] = false;
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined)
    console.log("Visitied vertex: " + v);
  for each (let w in this.adj[v]) {
    if(!this.marked[w]) {
      this.dfs(w);
    }
  }  
}


function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < v.length; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.graph.length; i++) {
    console.log(i + " -> ");
    for (let j = 0; j < this.graph.length; j++) {
      if (this.graph[i].[j] !== undefined)console.log(this.adj[i][j] + ' ');
    }
    console.log();
  }
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adv[v] != undefined) {
    console.log("Visited vertex: "+ v );
  }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}

g = new Graph(5);
g.addEdge(0.1);
g.addEdge(0.2);
g.addEdge(1.3);
g.addEdge(2.4);
g.showGraph();
g.dfs(0);


// Breadth-First Search.

function bfs(s) {
  let queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    let v = queue.shift();
    if (v == undefined) {
      console.log("visited vertex " + v);
    }
    for each (let w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0.2);
g.addEdge(1.3);
g.addEdge(2.4);
g.showGraph();
g.bfs(0);


// DETERMINING PATHS

this.edgeTo = [];

function bfs(s) {
  let queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    let v = queue.shift();
    if (v == undefined){
      console.log("Visited vertex " + v);
    }
    for each (let w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

function pathTo(v) {
  let source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  let path = [];
  for (let i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(s);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph();
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
let vertex = 4;
let paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}