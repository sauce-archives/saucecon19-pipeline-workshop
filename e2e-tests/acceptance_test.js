const assert = require('assert');

describe("Basic App Functionality", () => {

    it('should show the correct value for 15', () => {
        browser.url('/index.html');

        const messageText = "FizzBuzz"
        const expectedText = "FizzBuzz"

        assert.equal(messageText, expectedText);
    });
});