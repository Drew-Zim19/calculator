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
    if (operator = 'add'){
        add(num1, num2);
    }
}

function inputNumber(number) {
   if(isOperatorClicked === false){
    displayResult.push(number);
    document.querySelector('.screen').innerHTML = displayResult.join("");
   }
}

document.getElementById('seven').addEventListener("click", () => {
    inputNumber(7)
});

document.getElementById('eight').addEventListener("click", () => {


});

document.getElementById('nine').addEventListener("click", () => {


});

document.getElementById('four').addEventListener("click", () => {


});

document.getElementById('five').addEventListener("click", () => {


});

document.getElementById('six').addEventListener("click", () => {


});

document.getElementById('one').addEventListener("click", () => {


});

document.getElementById('two').addEventListener("click", () => {


});

document.getElementById('three').addEventListener("click", () => {


});

document.getElementById('zero').addEventListener("click", () => {


});

document.getElementById('cleared').addEventListener("click", () => {
    document.querySelector('.screen').innerHTML = 0;
    displayResult.length = 0;
});

document.getElementById('backspace').addEventListener("click", () => {
    if(displayResult.length > 0){
        displayResult.splice(displayResult.length - 1, 1);
        document.querySelector('.screen').innerHTML = displayResult.join("");
    }
});