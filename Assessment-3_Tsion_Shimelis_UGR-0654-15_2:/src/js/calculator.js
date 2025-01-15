let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;


function addDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

document.getElementById("plus").addEventListener("click", function () {
  if (currentInput) {
    firstOperand = parseFloat(currentInput);
    operator = "+";
    currentInput = ""; 
  }
});

document.getElementById("equals").addEventListener("click", function () {
  if (firstOperand !== null && currentInput) {
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      default:
        return; 
    }

    display.value = result; 
    currentInput = ""; 
    firstOperand = null; 
    operator = ""; 
  }
});


document.getElementById("clear").addEventListener("click", function () {
  currentInput = ""; 
  firstOperand = null; 
  operator = ""; 
  display.value = ""; 
});


const operators = document.querySelectorAll(".operator:not(#plus)");
operators.forEach((op) => {
  op.addEventListener("click", function () {
    if (currentInput) {
      firstOperand = parseFloat(currentInput);
      operator = this.dataset.value;
      currentInput = ""; 
    }
  });
});
