function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy Happy");
    }
}

canYouSpotTheProblem();

function Person(name) {this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(name);

"use strict";
function Person(name) {this.name = name; }
let ferdinand = Person("Feratile"); // oops

//Types

function goalOrientedRobot(state, memory) {
    //...
}