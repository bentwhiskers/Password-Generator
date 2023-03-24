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
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  'z', 
];

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
  'Z',
];






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be (between 8-128 characters)?")

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Character length does not match given parameters");
        return "Your Secure Password";
    }

    var includelowerCasedCharacters = confirm("Would you like to include lowercase characters?");

    var includeupperCasedCharacters = confirm("Would you like to include uppercased characters?");

    var includenumericCharacters = confirm("Would you like to include numeric characters?");

    var includespecialCharacters = confirm("Would you like to include special characters?");

    if (includelowerCasedCharacters === false &&
        includeupperCasedCharacters === false &&
        includenumericCharacters === false &&
        includespecialCharacters === false) {
            alert("Must include at least one charcter type!")
            return null;
        }

    var userCharacters = [];
    if (includelowerCasedCharacters === true) {
        userCharacters = userCharacters.concat(lowerCasedCharacters);
    }
    if (includeupperCasedCharacters === true) {
        userCharacters = userCharacters.concat(upperCasedCharacters);
    }
    if (includenumericCharacters === true) {
        userCharacters = userCharacters.concat(numericCharacters);
    }
    if (includespecialCharacters === true) {
        userCharacters = userCharacters.concat(specialCharacters);
    }

    var actualPass = "";

    for (var i = 0; i < passwordLength; i++) {
       var randomIndex = Math.floor(Math.random() * userCharacters.length)
       var actualChar = userCharacters[randomIndex];
       actualPass = actualPass + actualChar;
    }

    return actualPass;

}

generateBtn.addEventListener("click", writePassword);
