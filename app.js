const calculatorButtons = document.querySelectorAll('.btn');
const digitButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const previousInput = document.querySelector('.display-row1');
const currentValue = document.querySelector('.display-row2');

class Calculator {
  constructor(previousInput, currentValue) {
    this.previousInput = previousInput;
    this.currentValue = currentValue;
    let operators = ['+', '-', '×', '÷'];
    this.clear();
  };

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  };

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // Should be appended, not added (in a math sense)

  appendDigits(num) {
    if (num === '.' && this.currentOperand.includes('.')) return;
    if (num === '0' && this.currentOperand.includes('0')) return;
    this.currentOperand = this.currentOperand.toString() + num.toString();
  }

  updateDisplay () {
    currentValue.innerText = this.currentOperand;
    previousInput.innerText = this.previousOperand;
  }
 
  calculate() {
    let previous = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    let result = ''
    // If either the previous or current is nan, return

    if (isNaN(previous) || isNaN(current)) return;
    
    // Switch
    // console.log(previous, current, this.operation)
    switch(this.operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '×':
        result = previous * current;
        break;
      case '÷':
        result = previous / current;
        break;
      default:
        return;
    }

    this.currentOperand = result;

    this.previousInput.innerText = this.currentOperand;
    this.currentValue.innerText = this.currentOperand;

    this.operation = undefined;
    this.previousOperand = '';
  }

  operate(ope) {
    if (this.currentOperand === '') return;

    // if there's a previous input, execute calculate()

    if (this.previousOperand !== '') {
      previousInput.innerText === this.currentOperand;
      this.calculate();
    }
    this.operation = ope;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
}

const calcInit = new Calculator(previousInput, currentValue);

digitButtons.forEach(num => {
  num.addEventListener('click', () => {
    calcInit.appendDigits(num.innerText);
    calcInit.updateDisplay();
  });
});

operatorButtons.forEach(ope => {
  ope.addEventListener('click', () => {
    calcInit.operate(ope.innerText);
  })
})

equalButton.addEventListener('click', () => {
  calcInit.operate();
  calcInit.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calcInit.delete();
  calcInit.updateDisplay();
})

clearButton.addEventListener('click', () => {
  calcInit.clear();
  calcInit.updateDisplay();
})