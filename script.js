let result = '';

function appendToResult(value) {
    result += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    updateDisplay();
}

function deleteLastCharacter() {
    result = result.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        console.log("Input expression:", result);

        if (result.trim() === '') {
            result = 'Error';
            console.log("Empty input, setting result to 'Error'");
        } else {
            const calculated = evaluateExpression(result);
            console.log("Calculated result:", calculated);

            if (isNaN(calculated)) {
                throw new Error("Invalid calculation result");
            }
            result = calculated.toString();
        }
    } catch (error) {
        console.log("Error encountered:", error.message);
        result = 'Error';
    }
    updateDisplay();
}

function evaluateExpression(expr) {
    console.log("Evaluating expression:", expr);

    let numbers = expr.split(/(?=[\+\-\*\/%])/).map(Number); 
    console.log("Numbers:", numbers);

    const operators = expr.match(/[\+\-\*\/%]/g) || [];
    console.log("Operators:", operators);

    if (numbers.length === 0 || operators.length === 0) {
        console.log("Invalid expression, returning 0");
        return 0;
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '%') {
            console.log(`Processing % between ${numbers[i]} and ${numbers[i + 1]}`);
            numbers[i] = numbers[i] % numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*' || operators[i] === '/') {
            const operator = operators[i];
            console.log(`Processing ${operator} between ${numbers[i]} and ${numbers[i + 1]}`);
            
            if (operator === '*') {
                numbers[i] = numbers[i] * numbers[i + 1];
            } else if (operator === '/') {
                if (numbers[i + 1] === 0) throw new Error("Division by zero");
                numbers[i] = numbers[i] / numbers[i + 1];
            }
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }

    let total = numbers[0];
    console.log("Initial total:", total);

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        console.log(`Processing ${operator} between ${total} and ${nextNumber}`);

        switch (operator) {
            case '+':
                total += nextNumber;
                break;
            case '-':
                total -= nextNumber;
                break;
        }
    }

    console.log("Total after calculation:", total);
    return total;
}
