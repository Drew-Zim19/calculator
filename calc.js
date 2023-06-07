/*
This is a calculator program. Below is the outline of how to solve
1. add click event listeners on all buttons on calculator including delete and clear
2. on click, fire the css to show the numbers and operator on the interface
2. click input listener on '=' button calls on operate function once 2 numbers and an operator are selected 
3. operate function calls on the given operator and displays the resulting number to the calculator
4. 





*/


let num1 = 1;
let num2 = 3;
let operator = ''
// array which holds values to be printed to screen
let displayResult = [];
let firstValue = 0;
let isOperatorClicked = false;
const screenDisplay = document.querySelector('.screen');

//basic math operations functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    let result = num1 / num2;
    result = Math.round(result * 10000000) / 10000000
    return result;
}


function operate(operator, num1, num2){
    let finalResult = 0;
    if (operator === "add"){
        finalResult = add(num1, num2);
    }
    
    if(operator === "minus"){
        finalResult = subtract(num1, num2);
    }
    if(operator === "divide"){
        finalResult = divide(num1, num2);
    }
    if(operator === "multiply"){
        finalResult = multiply(num1, num2);
    }
    return finalResult;
}

//event listener on operators, if number has been input then display
document.getElementById('add').addEventListener("click", () => {
    if(displayResult.length > 0 && isOperatorClicked === false){
        inputNumber('+');
        isOperatorClicked = true;
        operator = "add";
    }
});


document.getElementById('divide').addEventListener("click", () => {
    if(displayResult.length > 0 && isOperatorClicked === false){
        inputNumber('/');
        isOperatorClicked = true;
        operator = "divide";
    }

});

document.getElementById('minus').addEventListener("click", () => {
    if(displayResult.length > 0 && isOperatorClicked === false){
        inputNumber('-');
        isOperatorClicked = true;
        operator = "minus";
    }

});

document.getElementById('multiply').addEventListener("click", () => {
    if(displayResult.length > 0 && isOperatorClicked === false){
        inputNumber('x');
        isOperatorClicked = true;
        operator = "multiply";
    }

});

function inputNumber(number) {
    displayResult.push(number);
    document.querySelector('.screen').innerHTML = displayResult.join("");
}

//equals button, fires only when 2 numbers and an operator is supplied

document.getElementById('equals').addEventListener("click", () => {
    if(isOperatorClicked === true && displayResult.length > 2){
        let copyArray = displayResult;
        toNum(copyArray);
        let finalResult = operate(operator, num1, num2);
        console.log(finalResult);
    }

});

//function to convert the array of numbers and operators to 2 numbers for calculations

function toNum(array){
    array = array.map(array => +array);
    let operatorIndex = 0;

    //logic to find index of NaN which is the operator

    operatorIndex = array.findIndex(operatorIndex => Number.isNaN(operatorIndex));
    
    //remove the NaN then join the remaining numbers into 2 nums

    array.splice(operatorIndex, 1);
    num2Array = array.splice(0, operatorIndex);
    num2 = Number(array.join(""));
    num1 = Number(num2Array.join(""));
}

document.getElementById('seven').addEventListener("click", () => {
    inputNumber(7)
});

document.getElementById('eight').addEventListener("click", () => {
    inputNumber(8)

});

document.getElementById('nine').addEventListener("click", () => {
    inputNumber(9)

});

document.getElementById('four').addEventListener("click", () => {
    inputNumber(4)

});

document.getElementById('five').addEventListener("click", () => {
    inputNumber(5)

});

document.getElementById('six').addEventListener("click", () => {
    inputNumber(6)

});

document.getElementById('one').addEventListener("click", () => {
    inputNumber(1)

});

document.getElementById('two').addEventListener("click", () => {
    inputNumber(2)

});

document.getElementById('three').addEventListener("click", () => {
    inputNumber(3)

});

document.getElementById('zero').addEventListener("click", () => {
    inputNumber(0)

});

document.getElementById('cleared').addEventListener("click", () => {
    document.querySelector('.screen').innerHTML = 0;
    displayResult.length = 0;
});

document.getElementById('backspace').addEventListener("click", () => {
    if(displayResult.length > 0){
        let char = displayResult.splice(displayResult.length - 1, 1).join("");
        console.log(char);
        //check to make sure backspace wasnt an operator. if it was, change operator clicked to false

        if(char === '-' || char === '+' || char === '/' || char === 'x'){
            isOperatorClicked = false;
        }

        document.querySelector('.screen').innerHTML = displayResult.join("");
    }
});