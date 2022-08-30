const calculatorButtons = document.querySelectorAll('.btn');
const digitButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const equalButton = document.querySelector('.equal');

function Calculator() {
  // Hide the values
  let current = 0;
  let previous = 0;
  let result = 0;

  // Accessible elements (testing)

  this.getInput = function () {
    digitButtons.forEach(e => e.addEventListener('click', console.log(e)));
  }
  
}

const calcInit = new Calculator();