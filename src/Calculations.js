class FizzBuzzCalculations {

  getValue(int_value){
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
    if (input > 100 || input < 1) {
      result = "out of range"
    }
    return result;
  }
}

export default FizzBuzzCalculations;