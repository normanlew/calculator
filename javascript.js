// let firstOperand = true;  // possible values of state are firstOperand, secondOperand
// let postOperation = false;
// let firstNumber = true;
let state = "firstOperand"; // possible values of state are firstOperand, secondOperand and postCalculation
let firstOperandValue = "0";
let secondOperandValue = "0";
// let secondOperand = "0";
let operatorValue = "";
// let numberShowing = "";

const displayText = document.getElementById("result");

function clear() {
    state = "firstOperand";
    firstOperandValue = "0";
    secondOperandValue = "0"
    // secondOperand = "0";
    operatorValue = ""
    displayText.value = "0";
    // displayText.value = "firstOperand";
    // state = "clear";
}

clear();

function handleButtonPush(buttonValue) {
    // console.log(buttonValue === "-");
    console.log("You pushed " + buttonValue);
    // console.log(buttonValue === "+ / −")
    // console.log(buttonValue === "9")
    // firstOperand += x;
    // displayText.value = firstOperand;

    if(buttonValue === "Clear") {
        clear();
    }
    else {
        // let displayedValue = displayText.value;
        let buttonValueNumeric = Number(buttonValue);
        let buttonValueNumericIsNan = Number.isNaN(buttonValueNumeric);
        // let numberToShow = "";
        
        if (!buttonValueNumericIsNan) {     
            switch(state) {
                case "firstOperand": 
                    if (buttonValue === "0") {
                        if (!(firstOperandValue === "0" || firstOperandValue === "-0")) {
                            firstOperandValue += buttonValue;
                        }
                    }
                    else {
                        if (firstOperandValue === "0") {
                            firstOperandValue = buttonValue;
                        }
                        else if (firstOperandValue === "-0") {
                            firstOperandValue = "-" + buttonValue;
                        }
                        else firstOperandValue += buttonValue;
                    }
                    displayText.value = firstOperandValue;
                    break;

                case "secondOperand":
                    if (buttonValue === "0") {
                        if (!(secondOperandValue === "0" || secondOperandValue === "-0")) {
                            secondOperandValue += buttonValue;
                        }
                    }
                    else {
                        if (secondOperandValue === "0") {
                            secondOperandValue = buttonValue;
                        }
                        else if (secondOperandValue === "-0") {
                            secondOperandValue = "-" + buttonValue;
                        }
                        else secondOperandValue += buttonValue;
                    }
                    displayText.value = secondOperandValue;
                    break;

                case "postCalculation":
                    firstOperandValue = buttonValue;
                    state = firstOperandValue;
                    displayText.text = firstOperandValue;

            }
                    
        }    
            // if (postOperation) {
            //     numberToShow = buttonValue;
            //     // postOperation = false;
            // }
            // else {
            // // postOperation = false;
            //     if (buttonValue === "0") {
            //         if (!(numberShowing === "0" || numberShowing === "-0")) {
            //             numberShowing += buttonValue;
            //         }
            //     }
            //     else {
            //         if (numberShowing === "0") {
            //             numberShowing = buttonValue;
            //         }
            //         else if (numberShowing === "-0") {
            //             numberShowing = "-" + buttonValue;
            //         }
            //         else numberShowing += buttonValue;
            //     }
            // }
            // // }
            // displayText.value = numberShowing;
            // if (firstOperand) {
            //     firstOperandValue = numberShowing;
            // }
            // else {
            //     secondOperandValue = numberShowing;
            // }
            
            // // else {
            // //     if (buttonValue === "0") {
            // //         if (!(secondOperandValue === "0" || secondOperandValue === "-0")) {
            // //             secondOperandValue += buttonValue;
            // //         }
            // //     }
            // //     else {
            // //         if (secondOperandValue === "0") {
            // //             secondOperandValue = buttonValue;
            // //         }
            // //         else if (secondOperandValue === "-0") {
            // //             secondOperandValue = "-" + buttonValue;
            // //         }
            // //         else secondOperandValue += buttonValue;
            // //     }
            // //     displayText.value = secondOperandValue;
            // // }
        

            // if (state === "operator") {
            //     numberShowing = "0";
            // }
            // else {
            //     numberShowing = displayText.value;
            // }
            // if (buttonValue === "0") {
            //     if (!(numberShowing === "0" || numberShowing === "-0")) {
            //         numberShowing += buttonValue;
            //     }
            // }
            // else {
            //     if (numberShowing === "0"){
            //         numberShowing = buttonValue;
            //     }
            //     else if (numberShowing === "-0") {
            //         numberShowing = "-" + buttonValue;
            //     }
            //     else {
            //         numberShowing += buttonValue;
            //     }
            // }
            // displayText.value = numberShowing;
          
        else if (buttonValue === "+ / −") {
            // postOperation = false;
            console.log("buttonValue is: " + buttonValue);

            switch (state) {
                case "firstOperand":
                    if (firstOperandValue === "0") {
                        firstOperandValue = "-0";
                    }
                    else if (firstOperandValue === "-0") {
                        // console.log("number showing is " + numberShowing);
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
                        // console.log("number showing is " + numberShowing);
                        firstOperandValue = "0";
                    }
                    else {
                        let firstOperandValueNumeric = -Number(firstOperandValue);
                        firstOperandValue = firstOperandValueNumeric.toString();
                    }
                    displayText.value = firstOperandValue;
                    // state = "firstOperand"
                    break;

                case "secondOperand":
                    if (secondOperandValue === "0") {
                        secondOperandValue = "-0";
                    }
                    else if (secondOperandValue === "-0") {
                        // console.log("number showing is " + numberShowing);
                        secondOperandValue = "0";
                    }
                    else {
                        let secondOperandValueNumeric = -Number(secondOperandValue);
                        secondOperandValue = secondOperandValueNumeric.toString();
                    }
                    displayText.value = secondOperandValue;
                    break;
            }
 
            // let numberShowing = displayText.value;
            // if (numberShowing === "0") {
            //     numberShowing = "-0";
            // }
            // else if (numberShowing === "-0") {
            //     // console.log("number showing is " + numberShowing);
            //     numberShowing = "0";
            // }
            // else {
            //     let numberShowingNumeric = -Number(numberShowing);
            //     numberShowing = numberShowingNumeric.toString();
            // }
            // displayText.value = numberShowing;
            // if (firstOperand) {
            //     firstOperandValue = numberShowing;
            // }
            // else {
            //     secondOperandValue = numberShowing;
            // }
            // if (numberShowing === "0") {
            //     numberShowing = "-0";
            // }
            // else if (numberShowing === "-0") {
            //     // console.log("number showing is " + numberShowing);
            //     numberShowing = "0";
            // }
            // else {
            //     let numberShowingNumeric = -Number(numberShowing);
            //     numberShowing = numberShowingNumeric.toString();
            // }
            // displayText.value = numberShowing;
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
                    if (!secondOperandValue.includes(".")) {
                        secondOperandValue += ".";
                    }
                    displayText.value = secondOperandValue;
                    break;   
                    
                case "postOperation":
                    firstOperandValue = "0.";
                    displayText.value = firstOperandValue;
                    state = "firstOperand";
                    break;
            }
            // postOperation = false;
            // if (!numberShowing.includes(".")) {
            //     numberShowing += ".";
            //     displayText.value = numberShowing;
            // }
            // if (firstOperand) {
            //     firstOperandValue = numberShowing;
            // }
            // else {
            //     secondOperandValue = numberShowing;
            // }
        }
        else if (["÷", "−", "+", "X"].includes(buttonValue)) {
            postOperation = false;
            if (firstOperand) {
                firstOperand = false;
                // firstOperatorValue = numberShowing;
            }
            operator = buttonValue;
        }
        else if (buttonValue === "=") {
            postOperation = false;
            switch (operator) {
                case "+":
                    firstOperandValue = add(firstOperand, secondOperand);
                    break;

                case "-":
                    firstOperandValue = subtract(firstOperand, secondOperand);
                    break;

                case "X":
                    firstOperandValue = multiply(firstOperand, secondOperand);
                    break;

                case "÷":
                    firstOperandValue = divide(firstOperand, secondOperand);
                    break;
            }
            displayText.value = firstOperandValue;
            firstOperand = true;
            postOperation = true;
        }
    }




    // // console.log(xNumeric);
    // if (Number.isNaN(xNumeric)) {
    //     console.log(x + " is not a number");
    // }
    // else {
    //     console.log(x + " is a number");
    // }

    // if (x === "\u00F7") {
    //     console.log("true");
    // }


    // console.log(typeof(x));
    // let isNumber = typeof(Number(x));
    // console.log(Number(x));
    // console.log(isNumber);

    // if (Number.isNaN(isNumber)) {
    //     console.log(x + " is not a number");
    // }
    // else {
    //     console.log(x + " is a number");
    // }

    // if (isNumber === "number") {
    //     console.log(x + " is a number");
    // }
    // else {
    //     console.log(x + " is not a number");
    // }

    // clear();
    // switch(state) {

    // }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let buttons = document.querySelectorAll("button");

for (const button of buttons) {
    // console.log(button.textContent);
    button.addEventListener("click", () => {
        // console.log(button.textContent);
        handleButtonPush(button.value);
    });
}




// \u2212 = minus

// \u00F7 = divide
