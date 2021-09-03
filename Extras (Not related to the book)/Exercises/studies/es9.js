// object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
    return a + b + c + d + e;
}


const {tiget, ...rest} = animals;

sum(...array);


function objectSpread (p1, p2, p3) {
    console.log(p1)
}

const {tiger, lion, ...rest} = animals; 

objectSpread(tiger, lion, rest);