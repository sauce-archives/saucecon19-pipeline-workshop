class FizzBuzzCalculations {

  getValue(int_value){

     if (int_value%3 == 0) && *int_value%5 == 0)
        return "fizzbuzz";
     else if (int_value%5 == 0)
        return "buzz";
     else if (int_value%3 == 0)
       return "fizz";
     else
       return "";
  }
}

export default FizzBuzzCalculations;
