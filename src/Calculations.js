class FizzBuzzCalculations {
    getValue(input){
        let result = "";

        if (input > 101 || < 1){
            result = "out of range";
        }
        else if (input % 15 === 0){
            result = "FizzBuzz";
        }
        else if (input % 3 === 0){
            result = "Fizz";
        }
        else if (input % 5 === 0){
            result = "Buzz";
        }
        else{
            result = input
        }

        return result;
   }
}

export default FizzBuzzCalculations