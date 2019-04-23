class FizzBuzzCalculations {


  getValue(int_value){
     var  modby3 = false;

     var  modby5 = false;

     if (int_value % 3 === 0){
         modby3 = true;
     }
     if (int_value % 5 == 0) {
         modby5 = true;
     }
     if (modby3 && modby5){
       return "FizzBuzz"
     }else if (modby3 ){

        return "Fizz"

     }else if (modby5){
        return "Buzz"
     }else {
        return "BAD"
     }

  }

}

export default FizzBuzzCalculations;