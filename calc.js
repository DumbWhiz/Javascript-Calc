//Operator Input
const operator = prompt('Enter operator ( either +, -, * or /): ');

// Operator Input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+'){
    alert(result = number1 + number2);
}

else if (operator == '-'){
    alert(result = number1 - number2);
}

else if (operator == '*'){
    alert(result = number1 * number2);
}

else if (operator == '/'){
    alert(result = number1 / number2);

}

const operator2 = prompt('Enter operator ( either +, -, * or /): ');
const number3 = parseFloat(prompt('a Enter third number?: '));

if (operator2 == '+'){
    alert(result + number3);
}

else if (operator2 == '-'){
    alert(result - number3);
}

else if (operator2 == '*'){
    alert(result * number3);
}

else if (operator2 == '/'){
    alert(result  / number3);
}

else {
    alert(result);
}

