// Assignment Code
var generateBtn = document.querySelector("#generate");

// character arrays
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numChar = '1234567890'.split('');
var specialChar = '!@#$%^&*()?~'.split('');
var passwordLength;

function generatePassword() {
  return;
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
// prompt/warning/etc: "You will be prompted with the following selections: 1, 2 ,3 ,4 and the length you want. Click 'OK' to begin. Click 'cance' to end"

// lower case: yes or no? --> use.toLowerCase
// upper case: yes or no? --> use.toLowerCase
// number: yes or no? --> use.toLowerCase
// special characters: yes or no? --> use.toLowerCase
// choose length: type number from 8 to 128; warnin, not valid input. Try again using the number keys only between 8 and 128
// if none were answered, then warning and ask to start over

// confirm: "These were your desired criteria. Hit 'ok' to continue to your new password, hit 'cancel' to start over"

// concatenate array based on user's selection(s)
// randomize array
// return passwork in alert (1); if time, then return to page
