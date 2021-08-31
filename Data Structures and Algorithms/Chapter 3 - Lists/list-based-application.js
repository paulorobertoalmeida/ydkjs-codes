//A List-Based Application

function create(file) {
    let arr = read(file).split("\n");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }
    return arr;
  }

  let movieList = new List();
for ( let i = 0; i < movies.lenght; i++) {
  movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.lenght(); list.next()) {
      if (list.getElement() instanceof Customer){
      console.log(list.getElement()["name"] + ", " +list.getElement()["movie"]);
      } else {
        console.log(list.getElement());
      }
    }
  }

  let customers = new List();

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}