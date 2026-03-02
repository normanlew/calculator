let state = "firstOperand"; // possible values of state are firstOperand, secondOperand and postCalculation
let firstOperandValue = "0";
let secondOperandValue = "0";
let secondOperandValueIsPostCalculation = false;
let secondOperandHasBeenEntered = false;
let operatorValue = "";

const displayText = document.getElementById("result");

function clear() {
    state = "firstOperand";
    secondOperandValueIsPostCalculation = false
    secondOperandHasBeenEntered = false;
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
                displayText.value = buttonValue;
                firstOperandValue = buttonValue;
                state = "firstOperand";
                secondOperandValue = "0";
                secondOperandValueIsPostCalculation = false;
            }   
            else {
                if (state === "secondOperand" && secondOperandValueIsPostCalculation) {
                    console.log("here");
                    secondOperandValue = buttonValue;
                    secondOperandValueIsPostCalculation = false;
                    secondOperandHasBeenEntered = true;
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
                        secondOperandHasBeenEntered = true;
                    }
                    displayText.value = numberToDisplay;
                }
            }
        }    

        else if (buttonValue === "+ / −") {
            if (state === "postCalculation") {
                clear();
                firstOperandValue = "-0";
                displayText.value = firstOperandValue;  
            }
            else if (state === "secondOperand" && secondOperandValueIsPostCalculation) {
                secondOperandValue = "-0";
                secondOperandValueIsPostCalculation = false;
                secondOperandHasBeenEntered = true;
                displayText.value = secondOperandValue;
            } 
            else {
                let numberToDisplay = displayText.value;
                if (numberToDisplay === "0") {
                    numberToDisplay = "-0";
                }
                else if (numberToDisplay === "-0") {
                    numberToDisplay = "0";
                }
                else {
                    let numberToDisplayNumber = -Number(numberToDisplay);
                    numberToDisplay = numberToDisplayNumber.toString();
                }
                if (state === "firstOperand") {
                    firstOperandValue = numberToDisplay;
                }
                else {
                    secondOperandValue = numberToDisplay;
                    secondOperandHasBeenEntered = true;
                }
                displayText.value = numberToDisplay;
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
                    clear();
                    firstOperandValue = "0.";
                    displayText.value = firstOperandValue;
                    state = "firstOperand";
                    break;
            }
        }

        else if (["÷", "−", "+", "X"].includes(buttonValue)) {
            switch (state) {
                case "firstOperand":
                    operatorValue = buttonValue;
                    state = "secondOperand";
                    secondOperandHasBeenEntered = false;
                    secondOperandValue = "0";
                    break;

                case "secondOperand":
                    if (secondOperandHasBeenEntered) {
                        firstOperandValue = operate(firstOperandValue, secondOperandValue, operatorValue);
                        operatorValue = buttonValue;
                        secondOperandValue = "0";
                        displayText.value = firstOperandValue;
                    }
                    else {
                        operatorValue = buttonValue
                    }
                    break;

                case "postCalculation":
                    operatorValue = buttonValue;
                    state = "secondOperand";
                    secondOperandHasBeenEntered = false;
                    secondOperandValue = "0";
                    break;
            }
        }
        else if (buttonValue === "=") {
            if (operatorValue === "÷" && numberIsAllZeros(secondOperandValue)) {
                alert ("Cannot divide by zero!");
            }   
            else if (state === "secondOperand" && secondOperandHasBeenEntered) {
                let tempFirstOperandValue = (operate(firstOperandValue, secondOperandValue, operatorValue)).toString();
                clear();
                firstOperandValue = tempFirstOperandValue;
                displayText.value = firstOperandValue;
                // firstOperandValue = (operate(firstOperandValue, secondOperandValue, operatorValue)).toString();
                // secondOperandValue = "0";
                // state = "postCalculation";
                // secondOperandHasBeenEntered = false;
                // displayText.value = firstOperandValue;
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
            const regex = /[^1-9]/g;
            // if (secondOperand === "0" || 
            //     (secondOperand.length > 1 && secondOperand.includes(".") && regex.test(secondOperand.substring(2,)))
            // ) {
            //     alert ("Cannot divide by zero!");
            // }
            return divide(firstOperand, secondOperand);
            break;
    }
}

function numberIsAllZeros(number) {
    const excludedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const noneIncluded = excludedNumbers.every(num => !number.includes(num));
        if (number === "0" || number === "0." || number == "0.0" ||
            (number.length > 2 && number.substring(0,3) == "0.0" && 
            (number.includes(".") && noneIncluded))) {
                return true;
        }
        else {
            return false;
        }
}