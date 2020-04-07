// Write a simple webpage opens an alert that takes a number from the user 
// and squares it and opens an alert with the result. 
// You must use a function and an event handler

const square = () => {
  let userInput = prompt('ENTER A NUMBER: ');
  let result = 0;
  result = userInput * Number(userInput);
  alert(result);
}

const multiply = () => {
  let userInput1 = prompt('ENTER A NUMBER: ');
  let userInput2 = prompt('ENTER A ANOTHER NUMBER: ');
  let result = 0;
  result = Number(userInput1) * Number(userInput2);
  alert(result);
}