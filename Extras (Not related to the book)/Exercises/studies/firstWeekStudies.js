// Call Stack Studies

let a = 1;
let b = 10;
let c = 100;

// Call Stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}
console.log('4');
two();
one();


//Recursional

function foo() {
    foo();
}

foo();

/* 
RangeError: Maximum call stack size exceeded
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
    at foo (/script.js:4:5)
*/