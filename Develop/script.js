// Assignment code here


// Get references to the button element
var generateBtn = document.querySelector("#generate");

// Write password in the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// my code here


// generate password based on user's selected criteria
function generatePassword() {
  var passwordLength = prompt("Enter the desired password length (between 8 and 128):");

  // check password length & if it's a number
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {

    //create alert if password length is not a number or is outside of the range
    alert("Please enter a valid password length between 8 and 128.");
    return;
  }

// confirm password criteria - special characters, numeric, uppercase, lowercase
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // check if any character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return;
  }

//characters input for password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+=-{}[]|:;<>?,.";

  //storing characters
  var availableChars = "";

  //store generated password
  var generatedPassword = "";

  // check if the user wants to include lowercase/uppercase/numeric/special characters in the password
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecialChars) {
    availableChars += specialChars;
  }

  // generate the actual password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars.charAt(randomIndex);
  }

  //return the generated password in field
  return generatedPassword;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);


