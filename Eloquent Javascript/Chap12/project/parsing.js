do(define(x, 10),
    if(>(x, 5),
        print("large"), 
        print("small")))

//

{
    type: "apply",
    operator: {type: "word", name: ">"},
    args: [
        {type: "word", name: "x"},
        {type: "word", value: 5}
    ]
}

//.

function parseExpression(program){
    program = skipSpace(program);
    let match, expression;
    if(match = /^".exec())
}