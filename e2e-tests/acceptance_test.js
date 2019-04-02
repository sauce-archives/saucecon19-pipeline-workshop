const assert = require('assert');

describe("Basic App Functionality", () => {

    it('should show the correct value for 15', () => {
        browser.url('/index.html');

        const input = browser.element('.fizzbuzzinput')
        input.addValue('16')

        const messageText = browser.element('.fizzBuzzMessage').getText();
        const expectedText = "FizzBuzz"

        assert.equal(messageText, expectedText);
    });
});