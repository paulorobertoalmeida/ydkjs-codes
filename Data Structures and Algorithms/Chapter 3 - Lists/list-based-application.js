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