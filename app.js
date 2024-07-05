/********SELECTORS*********/
const display = document.getElementById("display")

/************FUNCTIONS***********/
function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}