let firstValue = '';
let updateCalc = false;




//DISPLAY and INPUT FUCNTIONS STARTS

//Selectors
const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const pointBtn = document.getElementById('pointBtn');
const equalsBtn = document.querySelector('.equalsBtn');
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


function displayNumbers(num){
    if (currentScreen.textContent === '0') currentScreen.textContent = num;
    else currentScreen.textContent += num;
}

function displayPoint(){
    if (currentScreen.textContent === ''){
        currentScreen.textContent = '0';
    }
    if (currentScreen.textContent.includes('.')) return 
        currentScreen.textContent += '.';
}

function setOperators(op){
    
}

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
            if (b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}
//CALCULATOR FUNCTIONS ENDS