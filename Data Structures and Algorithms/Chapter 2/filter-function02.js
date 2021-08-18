//Using Filter

function passing(num) {
    return num >= 60;
  }
  
  let grades = [];
  for (let i = 0; i < 20; ++i) {
    grades[i] = Math.floor(Math.random() * 101);
  }
  
  let passGrades = grades.filter(passing);
  console.log("All grades: ");
  console.log(grades);
  console.log("passing grades: ");
  console.log(passGrades);
  
  
  /* 
  Result: (remember we use random method, so your result will be different)
  All grades: 
  [ 79, 19, 4, 26, 60, 0, 3, 56, 4, 82, 79, 81, 43, 60, 46, 1, 15, 73, 45, 58 ]
  passing grades: 
  [ 79, 60, 82, 79, 81, 60, 73 ]
  */