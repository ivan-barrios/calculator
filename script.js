let firstValue
let secondValue
let operator = null;
let shouldUpdate = false;




//DISPLAY and INPUT FUCNTIONS STARTS

//Selectors
const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const pointBtn = document.getElementById('pointBtn');
const equalsBtn = document.getElementById('equalsBtn');
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn = document.getElementById('clearBtn');
const currentScreen = document.querySelector('.current-screen');
const opScreen = document.querySelector('.op-screen');

//EventListeners
numberBtns.forEach((numBtn) => {
    numBtn.addEventListener(('click'), () => displayNumbers(numBtn.textContent));
});

pointBtn.addEventListener('click', () => displayPoint());

operatorBtns.forEach((opBtn) => {
    opBtn.addEventListener('click', () => setOperators(opBtn.textContent));
});

equalsBtn.addEventListener('click', () => startOperation());

clearBtn.addEventListener('click', () => clearScreen());

deleteBtn.addEventListener('click', () => deleteNumber());


function displayNumbers(num){
    if (currentScreen.textContent === '0' || shouldUpdate){
        resetScreen();
    }
    currentScreen.textContent += num;
}//Displays the numbers

function displayPoint(){
    if (shouldUpdate) resetScreen();
    if (currentScreen.textContent === ''){
        currentScreen.textContent = '0';
    }
    if (currentScreen.textContent.includes('.')) return 
        currentScreen.textContent += '.';
}//Displays correctly the point

function setOperators(op){
    if (operator !== null) startOperation();
    firstValue = currentScreen.textContent;
    operator = op;
    opScreen.textContent = firstValue + " " + op;
    shouldUpdate = true;
}//Stores the first value and the operator

function resetScreen(){
    currentScreen.textContent = '';
    shouldUpdate = false;
}//Resets the screen if a new number needs to be displayed

function startOperation(){
    if (shouldUpdate || operator === null) return;
    if (operator === '÷' && currentScreen.textContent === '0'){
        alert('You cannot divide by 0!');
        return
    }
    secondValue = currentScreen.textContent;
    opScreen.textContent += ' ' + secondValue + ' ' + '=';
    currentScreen.textContent = Math.round(
        operate(operator, firstValue, secondValue)*1000) / 1000;
    operator = null;
}//Starts the operation

function clearScreen(){
    firstValue = '';
    secondValue = '';
    operator = null;
    currentScreen.textContent = '0';
    opScreen.textContent = '';
}//For the CLEAR button

function deleteNumber(){
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
}//Deletes the last number written
 //What can I do with the operators?

//DISPLAY and INPUT FUNCTIONS ENDS




//CALCULATOR FUNCTIONS STARTS
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
        default:
            return null;
    }
}
//CALCULATOR FUNCTIONS ENDS