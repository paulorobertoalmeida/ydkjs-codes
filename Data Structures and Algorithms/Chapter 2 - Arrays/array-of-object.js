// ARRAYS OF OBJECTS

function Point(x,y) {
    this.x = x;
    this.y = y;
  }
  
  function displayPts(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].x + " , " + arr[i].y);
    }
  }
  
  let p1 = new Point(1,2);
  let p2 = new Point(3,5);
  let p3 = new Point(2,8);
  let p4 = new Point(4,4);
  let points = [p1, p2, p3,p4];
  for ( let i =0; i < points.length; i++ ) {
    console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
  }
  
  let p5 = new Point(12,-3);
  points.push(p5);
  console.log("After Push: ");
  displayPts(points);
  points.shift(); //Remove first element of an ARRAY
  console.log("After shift; ");
  displayPts(points);
  
  /* 
  Result:
  Point 1: 1, 2
  Point 2: 3, 5
  Point 3: 2, 8
  Point 4: 4, 4
  After Push: 
  1 , 2
  3 , 5
  2 , 8
  4 , 4
  12 , -3
  After shift; 
  3 , 5
  2 , 8
  4 , 4
  12 , -3
  */