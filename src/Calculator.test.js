import FizzBuzzCalculations from "./Calculations"

const assert = require('assert');

it('calculates Fizz correctly', () => {
  calc = new FizzBuzzCalculations();

  actual = calc.getValue(3);
  expected = "Fizz"

  assert.equal(actual, expected);
});
