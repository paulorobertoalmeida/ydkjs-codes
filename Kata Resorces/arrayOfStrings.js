function makeStrings(arr){
// Make an array of strings of the names saying whether or not they can go to The Matrix
 const len = arr.length;
 for (let i = 0 ; i <= len; i++) {
    const newArr = arr.map((index) => index.name)
      const ageLimits = arr.map((el) => {
        if (el.age >= 80) {
          return newArr[i] + ' can go to matrix';
        }else {
          return newArr[i]+ ' under age to matrix';
        } 
      })
      return ageLimits;
    }
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
