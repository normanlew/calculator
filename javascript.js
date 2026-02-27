let state = "firstOperand"; // possible values of state are firstOperand, secondOperand and postCalculation
let firstOperandValue = "0";
let secondOperandValue = "0";
let secondOperandValueIsPostCalculation = false;
let operatorValue = "";

const displayText = document.getElementById("result");

function clear() {
    state = "firstOperand";
    secondOperandValueIsPostCalculation = false
    firstOperandValue = "0";
    secondOperandValue = "0"
    operatorValue = ""
    displayText.value = "0";
}

clear();

function handleButtonPush(buttonValue) {
    if(buttonValue === "Clear") {
        clear();
    }
    else {
        let buttonValueNumeric = Number(buttonValue);
        let buttonValueNumericIsNan = Number.isNaN(buttonValueNumeric);
        
        if (!buttonValueNumericIsNan) {  
            if (state === "postCalculation") {
                    firstOperandValue = buttonValue;
                    state = "firstOperand";
                    displayText.text = firstOperandValue;
            }   
            else {
                if (state === "secondOperand" && secondOperandValueIsPostCalculation) {
                    secondOperandValue = buttonValue;
                    secondOperandValueIsPostCalculation = false;
                    displayText.value = secondOperandValue;
                }       
                else {
                    let numberToDisplay = (state === "firstOperand") ? firstOperandValue : secondOperandValue;
                    if (buttonValue === "0") {
                        if (!(numberToDisplay === "0" || numberToDisplay === "-0")) {
                            numberToDisplay += buttonValue;
                        }
                    }
                    else {
                        if (numberToDisplay === "0") {
                            numberToDisplay = buttonValue;
                        }
                        else if (numberToDisplay === "-0") {
                            numberToDisplay = "-" + buttonValue;
                        }
                        else numberToDisplay += buttonValue;
                    }
                    if (state === "firstOperand") {
                        firstOperandValue = numberToDisplay;
                    }
                    else if (state === "secondOperand") {
                        secondOperandValue = numberToDisplay;
                    }
                    displayText.value = numberToDisplay;
                }
            }
        }    

        else if (buttonValue === "+ / −") {
            switch (state) {
                case "firstOperand":
                    if (firstOperandValue === "0") {
                        firstOperandValue = "-0";
                    }
                    else if (firstOperandValue === "-0") {
                        firstOperandValue = "0";
                    }
                    else {
                        let firstOperandValueNumeric = -Number(firstOperandValue);
                        firstOperandValue = firstOperandValueNumeric.toString();
                    }
                    displayText.value = firstOperandValue;
                    break;

                case "postCalculation":
                    if (firstOperandValue === "0") {
                        firstOperandValue = "-0";
                    }
                    else if (firstOperandValue === "-0") {
                        firstOperandValue = "0";
                    }
                    else {
                        let firstOperandValueNumeric = -Number(firstOperandValue);
                        firstOperandValue = firstOperandValueNumeric.toString();
                    }
                    displayText.value = firstOperandValue;
                    break;

                case "secondOperand":
                    if (secondOperandValueIsPostCalculation) {
                        secondOperandValue = "-0";
                        secondOperandValueIsPostCalculation = false;
                    }
                    else {
                        if (secondOperandValue === "0") {
                            secondOperandValue = "-0";
                        }
                        else if (secondOperandValue === "-0") {
                            secondOperandValue = "0";
                        }
                        else {
                            let secondOperandValueNumeric = -Number(secondOperandValue);
                            secondOperandValue = secondOperandValueNumeric.toString();
                        }
                }   
                    displayText.value = secondOperandValue;
                    break;
            }
        }

        else if (buttonValue === ".") {
            switch (state) {
                case "firstOperand":
                    if (!firstOperandValue.includes(".")) {
                        firstOperandValue += ".";
                    }
                    displayText.value = firstOperandValue;
                    break;
                
                case "secondOperand":
                    if (secondOperandValueIsPostCalculation) {
                        secondOperandValue = "0.";
                        secondOperandValueIsPostCalculation = false;
                    }
                    else if (!secondOperandValue.includes(".")) {
                        secondOperandValue += ".";
                    }
                    displayText.value = secondOperandValue;
                    break;   
                    
                case "postCalculation":
                    firstOperandValue = "0.";
                    displayText.value = firstOperandValue;
                    state = "firstOperand";
                    break;
            }
        }

        else if (["÷", "−", "+", "X"].includes(buttonValue)) {
            console.log("here");
            switch (state) {
                case "firstOperand":
                    operatorValue = buttonValue;
                    state = "secondOperand";
                    break;

                case "secondOperand":
                    firstOperandValue = operate(firstOperandValue, secondOperandValue, operatorValue);
                    operatorValue = buttonValue;
                    state = "postCalculation";
                    secondOperandValueIsPostCalculation = true;
                    displayText.value = firstOperandValue;
                    break;

                case "postCalculation":
                    operatorValue = buttonValue;
                    state = "secondOperand";
                    break;
            }
        }
        else if (buttonValue === "=") {
            if (!(operatorValue === "")) {
                firstOperandValue = operate(firstOperandValue, secondOperandValue, operatorValue);
                state = "postCalculation";
                secondOperandValueIsPostCalculation = true;
                displayText.value = firstOperandValue;
            }
            
        }
    }
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

let buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", () => {
        handleButtonPush(button.value);
    });
}

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case "+":
            return add(firstOperand, secondOperand);
            break;

        case "−":
            return subtract(firstOperand, secondOperand);
            break;

        case "X":
            return multiply(firstOperand, secondOperand);
            break;

        case "÷":
            return divide(firstOperand, secondOperand);
            break;
    }
}