function assert(actual, expected) {
  console.assert(actual === expected, '\nactual: ' + actual + '\nexpected: ' + expected);
}

function testSum() {
  var sum = require('./sum');
  assert(sum(1, 2), 3);
}

testSum();
