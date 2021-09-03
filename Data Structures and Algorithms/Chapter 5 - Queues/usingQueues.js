// Using the Queue

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  function getDancers(male, females) {
    let names = read("...").split("\n");
    let (let i = 0; i < names.length; i++) {
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