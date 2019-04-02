class FizzBuzzCalculations {

  getValue(int_value){
      var retVal = "";

      if (int_value % 3 === 0) {
        retVal += "Fizz"
      }

      if (int_value % 5 === 0) {
        retVal += "Buzz"
      }
      return retVal;
  }

}

export default FizzBuzzCalculations;