// Write a program called calculator.js.
// Declare at least 4 variables, and then do math operations on them. 
// Mix and match operators and variables and console log the results of these operations.

// + addition
let n1 = 5;
let n2 = 10;
let totalAdd = n1 + n2;
console.log('5 + 10 = ' + totalAdd);

// - subtraction
let n3 = 25;
let n4 = 3;
let totalSub = n3 - n4;
console.log('25 - 3 = ' + totalSub);

// * multiplication
let n5 = 5;
let n6 = 5;
let totalMul = n5 * n6;
console.log('5 * 5 = ' + totalMul);

// / division
let n7 = 100;
let n8 = 5;
let totalDiv = n7 / n8;
console.log('100 / 5 = ' + totalDiv)

// variables
let a = 5;
let b = 10;
let c = 15;
let d = 20;
let e = 25;

// conditionals
if ((a + b) === c) {
  console.log('Correct! 5 + 10 = ' + c);
} else {
  console.log('Incorrect! Try again.');
};


if (b > a) {
  console.log('You got it!');
} else {
  console.log('Nope, try again!');
};


if (((c / a) == 3) && ((d / b) == 2)) {
  console.log('Correct! 15 / 5 = 3 and 20 / 10 = 2');
} else {
  console.log('Please check your math and try again.');
};


let i = 1;
while (i <= 5) {
  console.log('Count: ' + i);
  i++;
};

for (let i = 1; i * 5 <= 25; i++) {
  let total = i * i;
  console.log(i + ' x ' + i + ' = ' + total);
}