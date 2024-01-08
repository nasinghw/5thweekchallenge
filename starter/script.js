// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var lowercase = upperCasedCharacters.map((tacocat) => {return tacocat.toLowerCase()})
console.log("🚀 ~ file: script.js:91 ~ lowercase:", lowercase)

var lowercase = []

upperCasedCharacters.forEach((tacocat, index) => {

})
String
// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}



function getPasswordOptions() {
  let length = 0;
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters? ($@%&*, etc)");

  const passwordOptions = {
    length,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial,
  };

  return passwordOptions;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  const options = getPasswordOptions();

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '$@%&*';

  let availableChars = '';
  let generatedPassword = '';

  if (options.includeLowercase) availableChars += lowercaseChars;
  if (options.includeUppercase) availableChars += uppercaseChars;
  if (options.includeNumeric) availableChars += numericChars;
  if (options.includeSpecial) availableChars += specialChars;

  if (availableChars.length === 0) {
    alert("At least one character type should be selected!");
    return;
  }

  for (let i = 0; i < options.length; i++) {
    const randomChar = getRandom(availableChars);
    generatedPassword += randomChar;
  }

  document.getElementById('password').value = generatedPassword;
}

document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('generate').addEventListener('click', generatePassword);


for (let i = 0; i < array.length; index++) {
  const element = array[index];
  
}

if (condition) {
  
} else {
  
}
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

