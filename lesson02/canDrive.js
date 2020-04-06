// Write a program called canDrive.js. 
// Declare a first name, a last name, an age and a variable that is 16. 
// Your program should compare the driver's age with the driving age. 
// If they are old enough to drive it should console log the first name and 
// last name can drive and how long they've driven. If they are too young, log a countdown from 5.

// ==================================================== //

// VARIABLES
const firstName = 'John';
const lastName = 'Smith';
const drivingAge = 16;
const myAge = 22;
const beenDriving = (myAge - drivingAge);

// CONDITIONAL STATEMENT
if (myAge > drivingAge) {
  console.log('Hey, ' + firstName + " " + lastName + ' you have been driving for ' + beenDriving + ' years. You can drive!');
} else if (myAge == drivingAge) {
  console.log('Hey, ' + firstName + " " + lastName + ' you are at the age of ' + drivingAge + ' and you just started driving!');
} else {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
  console.log('You are too young to drive!!!');
}

// ==================================================== //

// VARIABLES
const firstName = 'John';
const lastName = 'Smith';
const drivingAge = 16;
const myAge = 22;

// STRING INTERPOLATION
const message1 = `Hey ${firstName} ${lastName}, you have been driving for ${myAge - drivingAge} years, you can drive!`;
const message2 = `Hey ${firstName} ${lastName}, you are at the age of ${drivingAge}, and just started driving!`;

// CONDITIONAL STATEMENT
if (myAge > drivingAge) console.log(message1);
else if (myAge == drivingAge) console.log(message2);
else {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
  console.log('You are too young to drive!!!');
}

// ==================================================== //