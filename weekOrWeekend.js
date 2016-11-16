function weekOrWeekend(day) {
  var today = new Date();
  results = today.getDay()
if(day.startsWith('W')) {
    return 'week';
    }
else {
  return 'weekend';
}
}
console.log(weekOrWeekend('Wednesday'));
const assert = require('assert');

assert.equal(weekOrWeekend('Wednesday'), 'week')
