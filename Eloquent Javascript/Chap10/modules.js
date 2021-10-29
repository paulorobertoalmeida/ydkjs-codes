// Improvising Modules

const weekDay = function(){
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return { 
        name(number) { return names[number];},
        number(name) {return names.indexOf(name);}
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));

// Evaluation Data as Code.

const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x = 2"));
console.log(x);

let plusOne = Function("n", "return n + 1");
console.log(plusOne(4));

