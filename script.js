let displayValue = '';
let shouldResetScreen = false;





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
})
operatorBtns.forEach((opBtn) => {
    opBtn.addEventListener('click', () => displayOp(opBtn.textContent));
})
pointBtn.addEventListener('click', () => displayPoint());


function displayNumbers(num){
    currentScreen.textContent += num;
    displayValue = Number(currentScreen.textContent);
}

function displayPoint(){
    if (displayValue === ''){
        currentScreen.textContent = '0';
    }
    if (currentScreen.textContent.includes('.')) return 
        currentScreen.textContent += '.';
    displayValue = Number(currentScreen.textContent);
}

function displayOp(op){
    if (typeof displayValue === "number"){
        screen.textContent += op;
    }
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
    //calls one of the above functions
}
//CALCULATOR FUNCTIONS ENDS