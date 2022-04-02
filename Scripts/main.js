import {add, multiply, divide, substract, operate} from "./functions.js"

let numberDiv = document.querySelector(".numbers");
let numberBtns = numberDiv.querySelectorAll("button");

let operatorDiv = document.querySelector(".operators");
let operatorBtns = operatorDiv.querySelectorAll("button");

let clearBtn = document.querySelector(".clear");
let equalBtn = document.querySelector(".equals");

let display = document.querySelector(".display");
let displayValue = "";


numberBtns.forEach(btn => {
    btn.addEventListener("click", e =>{
        if(displayValue == "undefined" || displayValue == "Bruh!") displayValue = "";
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener("click", e =>{
        if(displayValue == "undefined" || displayValue == "Bruh!") displayValue = "";
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    });
});

clearBtn.addEventListener("click", ()=>{
    displayValue = "";
    display.textContent = displayValue;
});

equalBtn.addEventListener("click", ()=>{
    let arr = displayValue.split(/([\+\-\*\/])/g);
    for(let i in arr){
        if(arr[i] != '+' && arr[i] != "-" && arr[i] != "*" && arr[i] != "/"&& arr[i] != ""){
            arr[i] = parseFloat(arr[i]);
        }
        if(arr[i] === ""); // error in input
    }
    displayValue = ""+calculateExpression(arr);
    display.textContent = displayValue;
});

function expressionToPostFix(expression){
    let order = {
        '+' : 0,
        '-' : 0,
        '*' : 1,
        '/' : 1
    };
    let operators = []; //operator stack
    let out = []; //output Queue
    expression.forEach(elem=>{
        if(typeof(elem) == "number") out.push(elem);
        else{
            // if elem is an operator
            if(operators.length > 0){
                while(order[elem] < order[operators[operators.length-1]]){
                    out.push(operators.pop());
                }
            }
            operators.push(elem);
        }
    });
    while(operators.length > 0) out.push(operators.pop());
    return out;
}

function calculateExpression(expression){
    let exp = expressionToPostFix(expression);

    let stack = [];
    for(let elem of exp){
        if(typeof(elem) == "number") stack.push(elem);
        else{
            let a = stack.pop();
            let b = stack.pop();
            let result = operate(b, a, elem);
            if(result == 'Bruh!') return result;
            stack.push(result);
        }
    }
    return stack[0];
}