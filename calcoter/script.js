const res = document.getElementById("result");

function calculate(value) {
  // check if the value contains an operator
  const operatorRegex = /([+\-*/])/;
  const operatorMatch = value.match(operatorRegex);
  if (!operatorMatch) {
    // no operator found
    res.value = "Invalid input";
    return;
  }
  // split the value into operands and operator
  const operands = value.split(operatorMatch[0]);
  const operator = operatorMatch[0];
  // convert operands to numbers
  const numbers = operands.map(parseFloat);
  // perform the operation
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    switch (operator) {
      case "+":
        result += numbers[i];
        break;
      case "-":
        result -= numbers[i];
        break;
      case "*":
        result *= numbers[i];
        break;
      case "/":
        if (numbers[i] === 0) {
          result = "Cannot divide by zero";
        } else {
          result /= numbers[i];
        }
        break;
      default:
        result = "Invalid operator";
        break;
    }
  }

  res.value = result;
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
    if (!res.value) {
    res.value = "";
    }
    res.value += enteredValue;
}

// adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
  // grabbing the liveScreen
    const liveScreen = res.value;
  // numbers
    if (e.key >= "0" && e.key <= "9") {
        liveScreen(e.key);
    }
  // operators
    if (["+", "-", "*", "/"].includes(e.key)) {
        liveScreen(e.key);
    }
  // press enter to see result
    if (e.key === "Enter") {
        calculate(res.value);
    }
  // backspace for removing the last input
    if (e.key === "Backspace") {
    // remove the last element in the string
    res.value = liveScreen.substring(0, liveScreen.length - 1);
    }
}
