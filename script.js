class Calculator{
    constructor(previousTextEl, currentTextEl){
        this.previousTextEl = previousTextEl
        this.currentTextEl = currentTextEl
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNum(number){
        this.currentOperand = number
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentTextEl.innerText = this.currentOperand
    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const previousTextEl = document.querySelector('[data-previous]');
const currentTextEl = document.querySelector('[data-current]');

const calculator = new Calculator(previousTextEl, currentTextEl)

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})