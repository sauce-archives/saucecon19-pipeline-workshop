class FizzBuzzCalculations {

  getValue(input){
    let result = ""
    if (input % 3 === 0){
      result = "Fizz"
    } else if (input % 5 === 0){
      result = "Buzz"
    } else if (input % 15 === 0){
      result = "FizzBuzz"
    }
      else if (input < 101 && input > 0){
        result = input
      } else {
        result = "input is out of range"
      }
    return result;
  }
}
export default FizzBuzzCalculations;
