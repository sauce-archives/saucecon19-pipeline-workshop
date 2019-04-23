class FizzBuzzCalculations {

  getValue(int_value){
    if (int_value % 3 === 0 && int_value % 5 === 0){
      return "FizzBuzz";
     }
    if (int_value % 3 === 0){
      return "Fizz";
     }
    if (int_value % 5 === 0){
      return "Buzz";
     }
  }

}

export default FizzBuzzCalculations;