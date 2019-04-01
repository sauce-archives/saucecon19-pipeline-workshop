class FizzBuzzCalculations {

  getValue(int_value){
      if (int_value % 5 === 0){
	  return "Buzz"
      }
      else if (int_value % 3 === 0){
	  return "Fizz"
      }
      else {
	  return "FizzBuzz"
      }
     
  }

}

export default FizzBuzzCalculations;