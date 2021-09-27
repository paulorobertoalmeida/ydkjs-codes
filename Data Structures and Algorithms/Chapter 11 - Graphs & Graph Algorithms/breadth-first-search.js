//Breadth-First Search

function bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s); //add to back of queue
    while (queue.lenght > 0) {
      let v = queue.shift(); // remove from front of queue
      if (v == undefined) {
        console.log("visited vertex: " + v);
      }
      for each (let w in this.adj[v]) {
        if(!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }