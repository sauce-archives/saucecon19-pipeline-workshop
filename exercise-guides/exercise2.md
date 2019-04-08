# Exercise 2: Intermediate "FizzBuzz" Challenge

Now that we've created the initial logic behind FizzBuzz, let's extend the challenge by creating logic that returns an "out of range" message if the tested integers are beyond 1-100.

### Part One: Modify Existing Application Logic

1. Open `saucecon19-pipeline-workshop/src/Calculations.js`
2. Refactor the `getValue` and edit the logic so that t:
    * Before: 
    ```
    getValue(input){
        if (input % 3 === 0){
            return "Fizz"
        }
        else if (input % 5 === 0){
            return "Buzz"
        }
        else {
            return "FizzBuzz"
        } 
    }
    ```
    * After:
    ```
    getValue(input){ 
        let result = "";
        if (input % 15 === 0){
            result = "FizzBuzz";
        }
        else if (input % 5 === 0) {
            result = "Buzz";
        }
        else if (input % 3 === 0){
            result = "Fizz";
        }
            return result;
        }
    }
    ```
    
### Part Two: Add New Application Logic
1. Add additional else if / else statements that determine whether or not the range is out of bounds.
2. Ensure the application prints the following String "out of range", for example:
    ```
    else if (input < 101 && input > 0) {
      result = input
    }
    else {
      result = "out of range"
    }
    ```