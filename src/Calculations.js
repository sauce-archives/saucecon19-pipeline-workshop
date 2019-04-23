class FizzBuzzCalculations {

    getValue(input) {
        if (input % 3 === 0 && input % 5 === 0) { return "FizzBuzz" };
        if (input % 3 === 0) { return "Fizz" };           
        if (input % 5 === 0) { return "Buzz" };
            
    }

    export default FizzBuzzCalculations;