# Exercise 1: Beginner "FizzBuzz" Challenge
For this challenge we will implement the logic for the well-renowned [FizzBuzz](https://hackernoon.com/why-im-still-using-fizz-buzz-to-hire-software-developers-7e31a89a4bbf) challenge. Write a program that prints **integers** from 1 to 100.

* If it’s a multiple of 3, it should print **"Fizz"**. 
* If it’s a multiple of 5, it should print **"Buzz"**. 
* If it’s a multiple of 3 and 5, it should print **"FizzBuzz"**.

### Part One: Edit Application Logic

1. Open `saucecon19-pipeline-workshop/src/Calculations.js`
2. Add the following statement:
    ```
    class FizzBuzzCalculations {
        getValue(input){
            if (int_value % 3 === 0){
        return "Fizz"
       }
    }
    export default FizzBuzzCalculations
    ```
3. Repeat step 2 for "Buzz" and "FizzBuzz" Calculations

### Part Two: Edit Test Logic

1. Write equivalent tests in `saucecon19-pipeline-workshop/src/Calculator.test.js`. Below is an example for the "Fizz" test.
    ```
    import FizzBuzzCalculations from "./Calculations"
    
    const assert = require('assert');
    
    it('calculates Fizz correctly', () => {
        const calc = new FizzBuzzCalculations;
        const expected = "Fizz"
        const actual = calc.getValue(3)
        assert.equal(actual, expected);
    });
    ```
2. Repeate step 1 for determining **"Buzz"** and **"FizzBuzz"** Tests.

> For the full solution to `Calculator.js`, `checkout` branch `my_sweet_feature`
    
