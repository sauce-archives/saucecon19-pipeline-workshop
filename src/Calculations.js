class FizzBuzzCalculations {

  getValue(int_value){
    if ((int_value%3==0) && (int_value%5==0)) {
      return "FizzBuzz";
    }  
    else if (int_value%5==0) {
      return "Buzzy";
    }
    else if (int_value%3==0) {
      return "Fizzy!"
    }
    else {
      return "please enter a valid number"
    }
  }

}

export default FizzBuzzCalculations;