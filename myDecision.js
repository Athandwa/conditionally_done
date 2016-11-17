// - Transportation
// - Eating food in the morning
// - Wacth TV
// - Listening to music

// - Write a function called EatingFood that takes in a time parameter. If you
// eating a Breakfast in the morning should return 07:00, eating Lunch should
// return 13:00 otherwise 'I do not eat'.

function EatingFood(time) {
  switch(time) {
    case 'Breakfast':
      return '07:00';
    case 'Lunch':
      return '13:00';
    default:
      return 'I do not eat';
  }
}
// console.log(EatingFood('In the morning'));
// console.log(EatingFood('In the afternoon'));
// console.log(EatingFood('I do nt eat'));
const assert = require('assert')

assert.equal(EatingFood('Breakfast'), '07:00');
assert.equal(EatingFood('Lunch'), '13:00');
assert.equal(EatingFood('Supper'), 'I do not eat');
