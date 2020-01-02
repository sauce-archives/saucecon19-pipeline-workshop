class FizzBuzzCalculations {
  getValue(input){
    const divisByThree = (input % 3 === 0);
    const divisByFive = (input % 5 === 0);
    if (divisByThree && divisByFive) {
  		return "FizzBuzz";
    } else if (divisByThree) {
      return "Fizz";
    } else if (divisByFive) {
      return "Buzz";
    }
  }
}
export default FizzBuzzCalculations;