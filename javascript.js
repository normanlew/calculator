let state = "clear" // possible values: clear, firstOperand, secondOperand, 
let firstOperand = "";
let secondOperand = "";
let operator = "";

const displayText = document.getElementById("result");

function clear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    displayText.value = "0";
    state = "clear";
}

clear();

function handleButtonPush(x) {
    console.log("You pushed " + x);
    clear();
}

let buttons = document.querySelectorAll("button");

for (const button of buttons) {
    // console.log(button.textContent);
    button.addEventListener("click", () => {
        // console.log(button.textContent);
        handleButtonPush(button.textContent);
    });
}
