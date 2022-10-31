// Assignment Code
var generateBtn = document.querySelector("#generate");

// character arrays
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numChar = '1234567890'.split('');
var specialChar = '!@#$%^&*()?~'.split('');
var passwordLength;

// Declares array consisting of all possible criteria; Array of arrays
var availableChar = Array();
// Places character array at given index
availableChar[0] = lowerChar;
availableChar[1] = upperChar;
availableChar[2] = numChar;
availableChar[3] = specialChar;



// Write password to the #password input
function writePassword() {
  alert("This tool will walk you through steps to select the criteria for your new password" + '\n' + "You have the following options: " + '\n' + "- Lower Case Letters" + '\n' + "- Upper Case Letters" + '\n' + "- Special Characters" + '\n' + "Select the length of your password");

  let lowerChoice = prompt("Do you want to include lower case characters?" + '\n' + "Write 'yes' to include or 'no' to not include lower case characters");
  console.log(lowerChoice);


  let upperChoice = prompt("Do you want to include upper case characters?" + '\n' + "Write 'yes' to include or 'no' to not include upper case characters");
  console.log(upperChoice);
  

  let numChoice = prompt("Do you want to include numbers?" + '\n' + "Write 'yes' to include or 'no' to not include numbers");
  console.log(numChoice);

  let specialChoice = prompt("Do you want to include special characters?" + '\n' + "Write 'yes' to include or 'no' to not include special characters");
  console.log(specialChoice);

  var lower = lowerChoice.toLowerCase();
  var upper = upperChoice.toLowerCase();
  var number = numChoice.toLowerCase();
  var special = specialChoice.toLowerCase();

  console.log(lower);
  console.log(upper);
  console.log(number);
  console.log(special);
  
  // TO DO: ADD LENGTH

console.log("You made it to the generate function");

  function generatePassword() {
    if (lower == 'no') {
      availableChar.shift();
    } else {
      console.log("use lower case")
    }
    console.log("passed lower: " + availableChar);

    if (upper !== 'no') {
      availableChar.splice(1,1);
    } else {
      console.log("use upper case")
    }
    console.log("passed upper: " + availableChar);

    if (number !== 'yes') {
      availableChar.splice(2,1);
    } else {
      console.log("use number")
    }
    console.log("passed number: " + availableChar);

    if (special !== 'yes') {
      availableChar.pop();
    }else {
      console.log("use special case")
    }
    console.log("passed special: " + availableChar);

    if (lower !== 'yes' && upper !== 'yes' && number !== 'yes' && special !== 'yes') {
      alert("You did not select any criteria. Restart.")
    }
    console.log("Final password chars: " + availableChar);
  
    // flattens array to remove nested quality at a depth of 2
    passwordArray = availableChar.flat(2);
  
    console.log("Final password chars: " + passwordArray);
  
  
    return passwordArray;
  };

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
