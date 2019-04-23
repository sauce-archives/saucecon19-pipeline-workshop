const assert = require('assert');

describe("Basic App Functionality", () => {

    it('should show the correct value for 15', () => {
        browser.url('/index.html');

        const input = $('.fizzbuzzinput')
        input.value = '15'

        const messageText = $('.fizzBuzzMessage').getText();
        const expectedText = "FizzBuzz"

        assert.equal(messageText, expectedText);
    });
});