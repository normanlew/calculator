// let state = "clear" // possible values: clear, firstOperand, secondOperand, 
let firstOperand = "";
let secondOperand = "";
let operator = "";

const displayText = document.getElementById("result");

function clear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    displayText.value = "0";
    // state = "clear";
}

clear();

function handleButtonPush(x) {
    console.log("You pushed " + x);
    // let xNumeric = Number(x);

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
        handleButtonPush(button.textContent);
    });
}




// \u2212 = minus

// \u00F7 = divide
