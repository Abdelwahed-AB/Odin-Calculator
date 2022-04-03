import {add, multiply, divide, substract, operate, isFloat} from "./functions.js"

let numberDiv = document.querySelector(".numbers");
let numberBtns = numberDiv.querySelectorAll("button");

let operatorDiv = document.querySelector(".operators");
let operatorBtns = operatorDiv.querySelectorAll("button");

let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equals");
let pointBtn = document.querySelector(".point");

let display = document.querySelector("#display");

let operation = [];
let isF = false; //is the number typed a float
let cleared = false;

numberBtns.forEach(btn => {
    btn.addEventListener("click", e =>{
        if(!([".","="]).includes(e.target.textContent)){
            if(["0","Bruh!"].includes(display.textContent))
                display.textContent = "";
            if(operation.length > 1 && !cleared){
                display.textContent = "";
                cleared = true;
            }
            display.textContent += e.target.textContent;
        }
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener("click", e =>{
        if(["Bruh!", "undefined"].includes(display.textContent))
            display.textContent = "0";
        operation.push(parseFloat(display.textContent));
        cleared = false;
        operation.push(e.target.textContent);

        if(operation.length >= 3){
            let val = operate(operation[0], operation[2], operation[1]);
            operation = [val, e.target.textContent];

            display.textContent = val;
            isF = isFloat(val);
        }else{
            isF = false;
        }

        console.log(operation);
    });
});

clearBtn.addEventListener("click", ()=>{
});

deleteBtn.addEventListener("click", ()=>{
    if(display.textContent[display.textContent.length - 1] === ".")
        isF = false;
    display.textContent = display.textContent.slice(0,-1);

    if(display.textContent.length == 0)
        display.textContent = "0";
});

equalBtn.addEventListener("click", ()=>{
    if(["Bruh!", "undefined"].includes(display.textContent))
        display.textContent = "0";
    isF = false;
    operation.push(parseFloat(display.textContent));
    if(operation.length >= 3){
        let val = operate(operation[0], operation[2], operation[1]);
        display.textContent = val;
        operation = [];
        isF = isFloat(val);
    }else{
        operation = [];
    }
    cleared = false;
});

pointBtn.addEventListener("click", ()=>{
    if(!isF){
        display.textContent += ".";
        isF = true;
    }
})