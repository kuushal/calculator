const clearButton = document.querySelector('.clear');
const result = document.querySelector('.result');
const operatorAndOperands = document.querySelectorAll('li');
const calculateResult = document.querySelector('.equals');

let input = '';

// eventListeners
clearButton.addEventListener('click', clearResult);
operatorAndOperands.forEach(operate => operate.addEventListener('click', getInput));
calculateResult.addEventListener('click', calculate);

function calculate() {
    let first = +input.charAt(0);
    let second = +input.charAt(2);
    let oper = input.charAt(1);

    input = operate(oper, first, second);
    result.textContent = input;

}


function clearResult() {
    input = '';
    result.textContent = '0';
}

function getInput(e) {
    input += e.target.innerHTML;
    result.textContent = input;
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
    return +first / +second;
}

function operate(operator, first, second) {
    if (operator == "+") {
        return add(first, second);
    } else if (operator == "-") {
        return subtract(first, second);
    } else if (operator == '×') {
        return multiply(first, second);
    } else if (operator == '÷') {
        return divide(first, second);
    }
}

