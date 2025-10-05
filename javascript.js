let firstNum;
let secondNum;
let operator;

function add(firstNum, secondNum) {
    const sum = firstNum + secondNum;
    return sum;
}

function subtract(firstNum, secondNum) {
    const difference = firstNum - secondNum;
    return difference;
}

function multiply(firstNum, secondNum) {
    const product = firstNum * secondNum;
    return product;
}

function divide(firstNum, secondNum) {
    const difference = firstNum / secondNum;
    return difference;
}

function operate(firstNum, secondNum, operator) {
    firstNum;
    secondNum;
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    }
}