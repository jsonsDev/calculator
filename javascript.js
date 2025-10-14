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

const displayNum = document.querySelector('.display');
const selectedButton = document.querySelectorAll('button');

displayNum.textContent = "0";

selectedButton.forEach(button => {
    button.addEventListener('click', function() {
        let selectedButton = button.textContent;
        
        if (selectedButton === 'DEL') {
            if (displayNum.textContent.length > 1) {
                displayNum.textContent = displayNum.textContent.slice(0, -1);
            } else {
                displayNum.textContent = "0";
            }
        } else if (selectedButton === 'C') {
            displayNum.textContent = '0';
        } else {
            if (displayNum.textContent == '0') {
                displayNum.textContent = '';
            } 
        
        let calcInput = displayNum.textContent += selectedButton;
        let equation = calcInput.split(/([+\-x/=])/);
        let firstNum = parseInt(equation[0]);
        let operator = equation[1];
        let secondNum = parseInt(equation[2]);

        console.log(firstNum);
        console.log(secondNum);
        console.log(operator);

            if (selectedButton === '=') {
                displayNum.textContent = operate(firstNum, secondNum, operator);
            }
        }
    });
});


