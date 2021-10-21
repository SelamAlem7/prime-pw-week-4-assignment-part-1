console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`
}
// Remember to call the function to test
console.log( 'Test - personalized hello:', helloName('Matt'));
console.log( 'Test - personalized hello:', helloName('Abbysinia'));
console.log( 'Test - personalized hello:', helloName('Euphratius'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log( 'Adding two numbers 3 & 2:', addNumbers(3,2));
console.log( 'Adding two numbers 4 & 35:', addNumbers(4,35));
console.log( 'Adding two numbers 39 & 304:', addNumbers(39,304));
console.log( 'Adding two numbers 12 & 81:', addNumbers(12,81));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log( 'Multiplying 3 Numbers (2x3x2)', multiplyThree(2,3,2));
console.log( 'Multiplying 3 Numbers (8x2x10)', multiplyThree(8,2,10));
console.log( 'Multiplying 3 Numbers (5x3x6)', multiplyThree(5,3,6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( +number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome

console.log( 'Testing if the number 3 is positive & greater than 0:', isPositive(3));
console.log( 'Testing if the number 0 is positive & greater than 0:', isPositive(0));
console.log( 'Testing if the number -3 is positive & greater than 0:', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array  ) {
for( let i = 0; i < array.length; i++ ){
  if (i === array.length - 1){
    return array[i];
  }
}
  return undefined;
}

console.log(getLast([ 'red', 'blue', 'orange', 'yellow']));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find(value, array) {
   for(let i = 0; i < array.length; i++ ) {
      if(value === array[i]) {
         return true;
      }
   }
   return false;
}

let favNumbers = ["2","23","7","17","9", "32", "8"];
console.log('Finding the number 7 in the array:', find("7", favNumbers));
console.log('Finding the number 20 in the array:', find("20", favNumbers));
//console.log(find("7", favNumbers));

// ----------------------
// Stretch Goals - I feel like i need to personally do more practice on these !ß
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
