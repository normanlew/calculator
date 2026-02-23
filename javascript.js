let state = "firstOperand" // possible values: firstOperand, secondOperand, 
// let firstNumber = true;
let firstOperand = "0";
let secondOperand = "0";
let operator = "";

const displayText = document.getElementById("result");

function clear() {
    state = "firstOperand";
    firstOperand = "0";
    secondOperand = "0";
    operator = ""
    displayText.value = firstOperand;
    // state = "clear";
}

clear();

function handleButtonPush(buttonValue) {
    // console.log("You pushed " + buttonValue);
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

        if (!buttonValueNumericIsNan)  {
            switch (state) {
                case "firstOperand":
                    if (buttonValue === "0") {
                        if (!(firstOperand === "0" || firstOperand === "-0")) {
                            firstOperand += buttonValue;
                        }
                    }
                    else {
                        if (firstOperand === "0"){
                            firstOperand = buttonValue;
                        }
                        else if (firstOperand === "-0") {
                            firstOperand = "-" + buttonValue;
                        }
                        else {
                            firstOperand += buttonValue;
                        }
                    }
                    displayText.value = firstOperand;
                    break;
                
                // case "operator":
                //     state = "secondOperand";
                //     secondOperand = buttonValue;
                //     displayText.value = secondOperand;
                //     break;
                
                case "secondOperand":
                    if (buttonValue === "0") {
                        if (!(secondOperand === "0" || secondOperand === "-0")) {
                            secondOperand += buttonValue;
                        }
                    }
                    else {
                        if (secondOperand === "0"){
                            secondOperand = buttonValue;
                        }
                        else if (secondOperand === "-0") {
                            secondOperand = "-" + buttonValue;
                        }
                        else {
                            secondOperand += buttonValue;
                        }
                    }
                    displayText.value = secondOperand;
                    break;
            }
        }    
        else if (buttonValue === "+ / −") {
            console.log("buttonValue is + -");
            switch (state) {
                case "firstOperand":
                    if (firstOperand === "0") {
                        firstOperand = "-0";
                    }
                    else if (firstOperand === "-0") {
                        firstOperand === "0";
                    }
                    else {
                        let firstOperandNumberic = -Number(firstOperand);
                        firstOperand = firstOperandNumberic.toString();
                    }
                    displayText.value = firstOperand;
                    break;
                
                case "secondOperand":
                    if (secondOperand === "0") {
                        secondOperand = "-0";
                    }
                    else if (secondOperand === "-0") {
                        secondOperand === "0";
                    }
                    else {
                        let secondOperandNumberic = -Number(secondOperand);
                        secondOperand = secondOperandNumberic.toString();
                    }
                    displayText.value = secondOperand;
                    break;
            }
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
