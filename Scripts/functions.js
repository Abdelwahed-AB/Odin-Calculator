function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0) return 'Bruh!';
    else
        return Math.round(a/b * 100) / 100;
}

function operate(a, b, operator){
    switch(operator){
        case "+" :
            return add(a, b);
        case "*" :
            return multiply(a, b);
        case "-" :
            return substract(a, b);
        case "/" :
            return divide(a, b);
    }
}

export {add, substract, multiply, divide, operate}