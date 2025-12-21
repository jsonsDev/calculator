let firstNum = null;
let currentOperator = null;
let shouldResetScreen = false;

const displayNum = document.querySelector('.display');
displayNum.textContent = "0";

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (!isNaN(value)) {
            appendNumber(value);
        } else if (value === "C") {
            displayNum.textContent = "0";
            firstNum = null;
            currentOperator = null;
            } else if (value === 'DEL') {
                if (displayNum.textContent.length > 1) {
                    displayNum.textContent = displayNum.textContent.slice(0, -1);
                } else {
                    displayNum.textContent = "0";
                }
            } else if (value === "=") {
            evaluate();
            } else { 
            setOperator(value);  // + - x /
        }
    });
});

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
    if (secondNum != 0) {
    const difference = firstNum / secondNum;
    return difference;
    } else {
        return "Error: No bueno / 0!";
    }
}

function operate(firstNum, secondNum, operator) {
    if (operator == '+') {
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return subtract(firstNum, secondNum);
    } else if (operator == 'x') {
        return multiply(firstNum, secondNum);
    } else if (operator == '/') {
        return divide(firstNum, secondNum);
    }
}

function resetDisplay() {
    displayNum.textContent = "";
    shouldResetScreen = false;
}

function appendNumber(num) {
    if (displayNum.textContent === "0" || shouldResetScreen) {
        resetDisplay();
    }
    displayNum.textContent += num;
}

function setOperator(operator) {
    if (currentOperator !== null) {
        evaluate();
    }
    firstNum = Number(displayNum.textContent);
    currentOperator = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    
    const secondNum = Number(displayNum.textContent);
    const result = operate(firstNum, secondNum, currentOperator);

    displayNum.textContent = result;
    firstNum = result;
    currentOperator = null;
}