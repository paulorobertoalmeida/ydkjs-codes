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

function lastElement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}

// exceptions.

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() = "left") return "L";
    if (result.toLowerCase() = "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}


// Cleaning Up After Exceptions.

const accounts = {
    a: 100,
    b: 0, 
    c; 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}
function trasnfer(from, amount) {
    if (accounts[from] < amount) return from;
    accounts[from] --= amount;
    accounts[getAccount()] += amount;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}

// Select Catching.

for(;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose", dir);
        break;
    } catch (e) {
        console.log("Not a valid direction. Try again.");
    }
}

class InputError extends Error {}

function promptDirection(direction) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}

// Assertions.

function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

// the Locked Box.

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() { 
        if (this.locked) throw new Errors("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // Your code here.
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);