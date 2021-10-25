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

function test(label, body) {
    if(!body()) console.log(`Failed: ${label}`);
}
test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
    return "Xaipete".toUpperCase() == "XAIPETE";
});
test("dont convert case-less characters", () => {
    return "".toUpperCase() == "";
});

//Debbuging.

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));

// Error Propagation. 

function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}

console.log(promptNumber("How many trees do you see?"));