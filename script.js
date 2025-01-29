const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === '+/-') {
        if (display.value && !isNaN(display.value[display.value.length - 1])) {
            display.value = display.value[0] === '-' ? display.value.slice(1) : '-' + display.value;
        }
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateDisplay() {
    try {
        let expression = display.value;
        if (expression.includes('%')) {
            expression = expression.replace(/(\d+)%/g, (match, p1) => p1 / 100);
        }
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
