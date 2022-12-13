// Assignment code here
var min = 8;
var max = 128;
var charLength;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// Add listener for input fields
var length = document.querySelector("#length");
var hasLowerCase = document.querySelector("#lowerCase");
var hasUpperCase = document.querySelector("#upperCase");
var hasNumbers = document.querySelector("#numbers");
var hasSpecialChar = document.querySelector("#specialCharacters");

function generatePassword() {
  var acceptedChars = ""; // Reset acceptedChars string
  var password = ""; // Reset password string
  charLength = length.value; // Take in the value that will determine the number of characters in the password string

  // Check if input has been selected
    // If the if is true then it will concatinate to the string
  if(hasLowerCase.checked) {
    acceptedChars  = acceptedChars.concat(alphabet.toLowerCase());
  }

  if(hasUpperCase.checked) {
    acceptedChars  = acceptedChars.concat(alphabet.toUpperCase());
  }

  if(hasNumbers.checked) {
    acceptedChars  = acceptedChars.concat(numbers);
  }

  if(hasSpecialChar.checked) {
    acceptedChars  = acceptedChars.concat(specialChar);
  }

  // If acceptedChars is blank then it is invalid
  if(acceptedChars === "") {
    hasLowerCase.parentNode.style.backgroundColor = "pink";
    
    return "Please select at least one of the options above.";
  } else { // Else acceptedChars is not blank
    hasLowerCase.parentNode.style.backgroundColor = "white";
    // Check if charLength is within the correct boundaries
      // If it is not between (or equal to) 8 and 128 then the length is invalid
    if(charLength < min || charLength > max) {
      length.style.borderColor = "red";
      length.style.backgroundColor = "pink";
      return "Please select 8-128 characters";
    } else { // The length is valid and will generate a random password
      length.style.borderColor = "green";
      length.style.backgroundColor = "lightGreen";
      
      // For loop will run based off of user input
        // Random number generator is used in square brackets to pick a letter out from the string
      for(var i = 0; i < charLength; i++) { 
        password += acceptedChars[Math.floor(Math.random() * acceptedChars.length)]; // += will concatenate the string with the selected 
      } 
      return password;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
