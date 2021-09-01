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