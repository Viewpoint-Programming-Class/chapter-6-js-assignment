//Declare and initilize variables
let howOldAreYou;
let invalidInput;
let Age;
let approvedAge = 21;
const WELCOME_MESSAGE = `Welcome To The Kosher Wine Cellar!
You must be over 21 years to purchase on our site!`;

alert(WELCOME_MESSAGE);

Age = prompt('Please Enter Your Age');

console.log(typeof Age);

invalidInput = isNaN(Age);

Age =Number(Age);

console.log(typeof Age);

if (invalidInput) {
    alert('You have entered an invalid input!');
    throw 'INVALID_INPUT';
}

if (Age >=approvedAge) {
    alert(`You are welcome to purchase on our site!`);
} else {
    alert(`Sorry! You are underage!`)
}