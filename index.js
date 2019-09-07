/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

// sets newID to the result of 1000000000 + whatever value is stored in oldID
let newID = 1000000000 + oldID;

// sets ageIsValid to the boolean of whether the value stored in currentAge is an integer.
let ageIsValid = Number.isInteger(currentAge);

// sets randomNumber to the result of a random number between 1 - 20.
let randomNumber = Math.floor(Math.random() * 20) + 1;

// sets randomInteger to the result of whatever value is stored in randomNumber rounded down.
let randomInteger = Math.floor(randomNumber);

// sets randomUserID to the result of a random number between 1000000020 - 1000000001.
let randomUserID = Math.floor(Math.random() * (1000000020 - 1000000001) ) + 1000000001;
