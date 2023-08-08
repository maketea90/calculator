function add(a,b) {
    return a+b

}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}


let firstNumber;
let secondNumber;
let operator;

function operate(a,b, op) {
    if(op === '+') {
        return add(a,b)
    } else if(op === '-') {
        return subtract(a,b)
    } else if(op === 'x') {
        return multiply(a,b)
    } else if(op === '/') {
        return divide(a,b)
    } else {
        return `${op} is not an operation`
    }
}
const btns = document.querySelectorAll('.numberBtn')
const operations = document.querySelectorAll('.operation')

const display = document.querySelector('.display')

const clear = document.querySelector('.clear')

clear.addEventListener('click', function(e) {
    display.textContent = ''
    displayValue = display.textContent
    operator = ''
})

let displayValue;

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        display.textContent += btn.textContent
        displayValue = display.textContent
        if(operator !== ''){
            
        }
        // console.log(displayValue)
    })  
})

operations.forEach(operation => {
    operation.addEventListener('click', function(e) {

        firstNumber = display.textContent
        display.textContent += operation.textContent
        if(!operator){
            operator = operation.textContent
        } else {
            operator += operation.textContent
        }
       
        console.log(operator)
        displayValue = display.textContent

    })
})

const evaluator = document.querySelector('.evaluate')

evaluator.addEventListener('click', function(e) {
    const numberArray = displayValue.split(operator)
    console.log(numberArray)
    firstNumber = Number(numberArray[0])
    secondNumber = Number(numberArray[1])

    console.log(firstNumber)
    console.log(secondNumber)

    const result = operate(firstNumber, secondNumber, operator)

    display.textContent = result

    console.log(result)

    operator = ''

    displayValue = ''

})

//console.log(displayValue)