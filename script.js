//CALCULATOR FUNCTIONS STARTS
function add(a,b){

}

function subtract(a,b){

}

function multiply(a, b){

}

function divide(a, b){

}

function operate(operator, a, b){
    //calls one of the above functions
}
//CALCULATOR FUNCTIONS ENDS



//DISPLAY FUCNTIONS STARTS
const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
numberBtns.forEach((btn) => {
    btn.addEventListener(('click'), () => display(btn));
})




    function display(btn){
    }
//DISPLAY FUNCTIONS ENDS