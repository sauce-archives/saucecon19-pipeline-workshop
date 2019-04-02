import FizzBuzzCalculations from "./Calculations"

const assert = require('assert');

it('calculates Fizz correctly', () => {
  const calc = new FizzBuzzCalculations;

  const expected = "Fizz";
  const actual = calc.getValue(3);

  assert.strictEqual(actual, expected);
});

it('calculates Buzz correctly', () => {
  const calc = new FizzBuzzCalculations;

  const expected = "Buzz";
  const actual = calc.getValue(5);

  assert.strictEqual(actual, expected);
});

it('calculates FizzBuzz correctly', () => {
  const calc = new FizzBuzzCalculations;

  const expected = "FizzBuzz";
  const actual = calc.getValue(15);

  assert.strictEqual(actual, expected);
})