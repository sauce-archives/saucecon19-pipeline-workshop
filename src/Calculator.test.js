import FizzBuzzCalculations from "./Calculations"

const assert = require('assert');

it('calculates Fizz correctly', () => {
    const calc = new FizzBuzzCalculations;
    const expected = "Fizz";
    const actual = calc.getValue(3);
    assert.equal(actual, expected);
});
