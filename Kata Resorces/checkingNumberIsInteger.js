// Check if a number is an integer

function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(59));
console.log(isInt(4.67));
console.log(isInt(64));