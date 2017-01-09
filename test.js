function sum(val1, val2) {
  return val1 + val2;
}

function assert(actual, expected) {
  console.assert(actual === expected, '\nactual: ' + actual + '\nexpected: ' + expected);
}

function testSum() {
  assert(sum(1, 2), 3);
}

testSum();
