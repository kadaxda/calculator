// Basic Math Functions
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

// Operate Function takes in 2 numbers and a operator
function operate(operator, a, b) {
    if(operator == divide && b == 0) {
        return "ERROR, you cant divide by 0!"
    }
    return operator(Number(a),Number(b));
}

// Select the diffrent buttons via QuerySelector
let buttons = document.querySelectorAll(".numbers");
let display = document.querySelector(".display");
let operators = document.querySelectorAll(".operators");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let dot = document.querySelector("#dot");
let back = document.querySelector("#back");

// Diffrent Variables
let numberOne = "";
let numberTwo = "";
let operator = "";
let wordOperator = ""; // contains the operators in english (e.g. "add")
let result = "";


// Add the Event Listners
// Numbers
for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
                
        // clean display when typing a number button
        if( display.textContent == result && result != "") {
            numberOne = "";
            numberTwo = "";
            display.textContent = e.target.value;
            numberOne += e.target.value;
            console.log("number one2: " + numberOne);
        } 
        // Check if its the second Number
        else if(operator != "") {
            // If you input negative numbers..
            if (operator == "-" && numberOne == "") {
                display.textContent += e.target.value;
                numberOne += "-" + e.target.value;
                console.log("number one: " + numberOne);
                } else {
                display.textContent += e.target.value;
                numberTwo += e.target.value;
                console.log("number two: " + numberTwo);
                }
        }
        // Number One
        else {
        display.textContent += e.target.value;
        numberOne += e.target.value;
        console.log("number one: " + numberOne);
        }
    })
}

// Operators
for(let j = 0; j<operators.length; j++) {
    operators[j].addEventListener("click", function(e) {
        display.textContent += " " + e.target.value + " ";
        operator = e.target.value;
        // Fill in wordoperator
        if(operator == "+") {
            wordOperator = add;     
        } else if (operator == "-"){
            wordOperator = subtract;
        } else if (operator == "/"){
            wordOperator = divide;
        } else if (operator == "*"){
            wordOperator = multiply;       
        }

        console.log("operator: " + operator);
    })
}

// Equals Button
equals.addEventListener("click", function(e) {
    result = operate(wordOperator, numberOne, numberTwo);
    display.textContent = result;
    numberOne = result;
    numberTwo = "";
    console.log(result);
})


// Clear Button
clear.addEventListener("click", function(e) {
    display.textContent = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
})


// Dot button
dot.addEventListener("click", function(e) {
    if(operator == "" && numberOne != "") {
        display.textContent += ".";
        numberOne += ".";
    } else if (operator != "" && numberTwo != ""){
        display.textContent += ".";
        numberTwo += ".";
    }
})

// Back Button (doesnt addres each number but the whole)
back.addEventListener("click", function(e) {
    if(operator == "" && numberTwo == 0) {
        numberOne = "";
        display.textContent = "";
    } else if(numberOne != "" && operator != "" && numberTwo == "") {
        operator = "";
        display.textContent = numberOne;
    } else if(numberOne != "" && operator != "" && numberTwo != "") {
        numberTwo = "";
        display.textContent = numberOne + " " + operator + " ";
    }



})