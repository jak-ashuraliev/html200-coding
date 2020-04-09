/* Create a bank application.

The user should see a prompt so they can type which action to perform.
The user will have a list of 4 actions to choose from.
  Enter Q to quit (immediately quits the program).
  Enter W to withdraw. 
    The user will be prompted again to enter an amount to withdraw. 
    After withdrawing money, they should be able to type another option.
  Enter D to deposit.
    The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
  Enter B to view balance.
    The user will see their balance. Afterwards, they should be able to type another option.

The program will loop asking for input until the user enters Q.

Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!
  The user should not be able to make excessive withdrawals (no negative balances).
  The user should have a deposit cap of $50,000.
  The user should receive a warning to protect against low balances.
  Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
*/


// ================ 1st Option With Functions ================ //

const bankingApp = () => {

  // variables
  let userInput;
  let balance = 100;

  while (userInput !== 'Q') {

    // try and catch error
    try {

      // prompt user and convert to uppercase
      userInput = prompt(`
        PLEASE ENTER YOUR SELECTION: 
  
        Type W  to  WITHDRAW 
        Type  D  to  DEPOSIT 
        Type  B  to  SHOW BALANCE 
        Type  Q  to  QUIT`).toUpperCase();

    } catch (error) {

      console.log('An error occured', error);

    } finally {

      console.log('Program finished.');

    }

    // check for an empry entry
    if (userInput === null || userInput === '') {
      break;
    }

    // switch statements
    switch (userInput) {
      case 'W': {
        withdraw(); // invoke withdraw function
        break;
      }
      case 'D': {
        deposit(); // invoke deposit function
        break;
      }
      case 'B': {
        getBalance(); // invoke getBalance function
        break;
      }
      default: {
        alert('Thank you, goodbye!');
        break;
      }
    }
  }

  // deposit fuction
  function deposit() {
    userInput = prompt('Enter Deposit Amount: ');
    return balance = Number(userInput) + balance;
  }

  // widthdraw function
  function withdraw() {
    userInput = prompt('Enter Withdraw Amount: ');
    return balance = Number(userInput) - balance;
  }

  // getBalance function
  function getBalance() {
    return alert('Your current balance is: ' + balance);
  }

}

// invoke bankingApp
// bankingApp();




// ================ 2nd Option with Simple Switch Statements ================ //

const bankingApp2 = () => {

  let userInput;
  let balance = 100;

  while (userInput !== 'Q') {

    userInput = prompt(`
         PLEASE ENTER YOUR SELECTION: 
  
         Type W  to  WITHDRAW 
         Type  D  to  DEPOSIT 
         Type  B  to  SHOW BALANCE 
         Type  Q  to  QUIT`).toUpperCase();

    switch (userInput) {
      case 'W': {
        balance -= Number(prompt('Enter an amount to withdraw: '));
        break;
      }
      case 'D': {
        balance += Number(prompt('Enter an amount to deposit: '));
        break;
      }
      case 'B': {
        alert('Your balance is: $' + balance);
        break;
      }
      default: {
        alert('Thank you, goodbye!');
        break;
      }
    }
  }

}

// invoke bankingApp2
// bankingApp2();