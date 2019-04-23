class FizzBuzzCalculations {
    getValue(input) {
        // if (input > 0 && input < 101)
            if (input % 15 === 0)
                return 'FizzBuzz';
            else if (input % 3 === 0)
                return 'Fizz';
            else
                return input % 5 === 0 ? 'Buzz' : '';
        // else
        //     return 'out of range'

        // TODO: Add out of rangeg
    }
}

export default FizzBuzzCalculations;
