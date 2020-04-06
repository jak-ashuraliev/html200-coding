// Write a program that prints out the values of a deck of cards.
// ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

for (let i = 0; i < 4; i++) {
  for (let j = 1; j < 14; j++) {
    if (j === 1) {
      console.log('ACE of' + ' ' + suits[i]);
    } else if (j === 11) {
      console.log('JACK of' + ' ' + suits[i]);
    } else if (j === 12) {
      console.log('QUEEN of' + ' ' + suits[i]);
    } else if (j === 13) {
      console.log('KING of' + ' ' + suits[i]);
    } else {
      console.log(j + ' of ' + suits[i]);
    }
  }
};