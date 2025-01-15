let display = document.getElementById("display");
let currentInput = "";
let firstOperand = null;
let operator = "";


function addDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}


function clearCalculator() {
  currentInput = "";
  firstOperand = null;
  operator = "";
  display.value = "";
}


function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error"; 
  }
  return a / b;
}


function evaluateExpression() {
  if (firstOperand !== null && currentInput) {
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case "+":
        result = add(firstOperand, secondOperand);
        break;
      case "-":
        result = subtract(firstOperand, secondOperand);
        break;
      case "*":
        result = multiply(firstOperand, secondOperand);
        break;
      case "/":
        result = divide(firstOperand, secondOperand);
        break;
      default:
        return; 
    }

    display.value = result; 
    currentInput = ""; 
    firstOperand = result; 
    operator = ""; 
  }
}


document.getElementById("equals").addEventListener("click", function () {
  evaluateExpression();
});


document.getElementById("clear").addEventListener("click", function () {
  clearCalculator();
});


const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
  op.addEventListener("click", function () {
    if (currentInput) {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput); 
      } else {
        evaluateExpression(); 
      }
      operator = this.dataset.value; 
      currentInput = ""; 
    }
  });
});
