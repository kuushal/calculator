const clearButton = document.querySelector('.clear');
const result = document.querySelector('.result');
const calculateResult = document.querySelector('.equals');
const allOpertors = document.querySelectorAll('.operator');
const operands = document.querySelectorAll('.operand');

let input = '';

let firstNumber = '';
let secondNumber = '';
let operator = '';

// eventListeners
clearButton.addEventListener('click', clearResult);
allOpertors.forEach(eachOperator => eachOperator.addEventListener('click', getOperator));
operands.forEach(operand => operand.addEventListener('click', getFirstInput));
calculateResult.addEventListener('click', calculate);



function calculate() {
    secondNumber = +input;
    input = operate(operator, firstNumber, secondNumber);
    result.textContent = input;
}


function clearResult() {
    input = '';
    result.textContent = '0';
}

function getFirstInput(e) {
    input += e.target.innerHTML;
    console.log(input);
    result.textContent = input;
}

function getOperator(e) {
    firstNumber = +input;
    operator = e.target.innerHTML;
    clearResult();
}

function add(first, second) {
    return +first + +second;
}

function subtract(first, second) {
    return +first - +second;
}

function multiply(first, second) {
    return +first * +second;
}

function divide(first, second) {
    if (second == 0) {
        return 'lmao';
    }
    return +first / +second;
}

function operate(operator, first, second) {
    if (operator == "+") {
        return add(first, second);
    } else if (operator == "−") {
        return subtract(first, second);
    } else if (operator == '×') {
        return multiply(first, second);
    } else if (operator == '÷') {
        return divide(first, second);
    }
}

