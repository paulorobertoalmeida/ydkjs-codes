//Iterator Functions That Returns a New Array

function curve(grade) {
    return grade += 5;
  }
  
  let grades = [77, 65, 81, 92, 83];
  let newgrades = grades.map(curve);
  console.log(newgrades);

  // Result: 82, 70, 86, 97, 88