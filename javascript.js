let firstOperand = true;
// let firstNumber = true;
let firstOperandValue = "";
// let secondOperand = "0";
let operator = "";

const displayText = document.getElementById("result");

function clear() {
    firstOperand = true;
    firstOperandValue = "";
    // secondOperand = "0";
    operator = ""
    displayText.value = "0";
    // displayText.value = "firstOperand";
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
        let numberShowing = displayText.value;

        if (!buttonValueNumericIsNan)  {
            if (buttonValue === "0") {
                if (!(numberShowing === "0" || numberShowing === "-0")) {
                    numberShowing += buttonValue;
                }
            }
            else {
                if (numberShowing === "0"){
                    numberShowing = buttonValue;
                }
                else if (numberShowing === "-0") {
                    numberShowing = "-" + buttonValue;
                }
                else {
                    numberShowing += buttonValue;
                }
            }
            displayText.value = numberShowing;
        }    
        else if (buttonValue === "+ / −") {
            console.log("buttonValue is + -");
            if (numberShowing === "0") {
                numberShowing = "-0";
            }
            else if (numberShowing === "-0") {
                // console.log("number showing is " + numberShowing);
                numberShowing = "0";
            }
            else {
                let numberShowingNumeric = -Number(numberShowing);
                numberShowing = numberShowingNumeric.toString();
            }
            displayText.value = numberShowing;
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
