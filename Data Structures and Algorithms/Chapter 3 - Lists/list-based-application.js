//A List-Based Application

function create(file) {
  let arr = read(file).split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

let movieList = new List();
for ( let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
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
function checkOut(name, movie, filmList, customerList) {
  let c = new Customer(name, movie);
  customerList.append(c);
  filmList.remove(movie);
} else {
  console.log(movie + " is not available");
}

let movies = createArr("");
let movieList = new List();
let customers = new List();
for ( let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

console.log("available Movies: \n");
displayList(movieList);
checkOut("");
let name = prompt("WHat movie would you live? ");
let movie = prompt();
checkOut(name, movie, movieList, customers);
console.log("\n Customer Rentals: \n");
displayList(customers);
console.log("\n Movies Now available\n");
displayList(movieList);