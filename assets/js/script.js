// Assignment code here
var min = 8;
var max = 128;
var charLength;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%&";

// Add listener for input fields
var length = document.querySelector("#length");
var hasLowerCase = document.querySelector("#lowerCase");
var hasUpperCase = document.querySelector("#upperCase");
var hasNumbers = document.querySelector("#numbers");
var hasSpecialChar = document.querySelector("#specialCharacters");

function generatePassword() {
  var acceptedChars = "";
  var password = "";
  charLength = length.value;

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

  if(acceptedChars === "") {
    hasLowerCase.parentNode.style.backgroundColor = "pink";
    
    return "Please select at least one of the options above.";
  } else {
    hasLowerCase.parentNode.style.backgroundColor = "white";
    if(charLength < min || charLength > max) {
      length.style.borderColor = "red";
      length.style.backgroundColor = "pink";
      return "Please select 8-128 characters";
    } else {
      length.style.borderColor = "green";
      length.style.backgroundColor = "lightGreen";
  
      for(var i = 0; i < charLength; i++) {
        password += acceptedChars[Math.floor(Math.random() * acceptedChars.length)];
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
