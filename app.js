
function Calculator() {
  const calculatorButtons = document.querySelectorAll('.btn');
  const digitButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const decimalButton = document.querySelector('.decimal');
  const equalButton = document.querySelector('.equal');

  calculatorButtons.forEach(e => e.addEventListener('click', check))
}

const calcInit = new Calculator();