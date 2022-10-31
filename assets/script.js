// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

// character arrays
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numChar = '1234567890'.split('');
var specialChar = '!@#$%^&*()?~'.split('');

// Declares array consisting of all possible criteria; Array of arrays
var availableChar = Array();
// Places character array at given index
availableChar[0] = lowerChar;
availableChar[1] = upperChar;
availableChar[2] = numChar;
availableChar[3] = specialChar;

  

  alert("This tool will walk you through steps to select the criteria for your new password" + '\n' 
  + "You have the following options: " 
  + '\n' + "- Lower Case Letters" + '\n' 
  + "- Upper Case Letters" + '\n' 
  + "- Special Characters" + '\n' 
  + "- Select the length of your password");

var lowerChoice = "";
var upperChoice = "";
var numChoice = "";
var specialChoice = "";

var lower = "";
var upper = "";
var number = "";
var special = "";
var passwordLength = "";

// Put prompts in while loop until user selects valid response or cancels prompt.
// Outer While loop checks for the case where the user selects 'no' on all criteria and requests the user reselect criteria.
while (true) {
  // checks for valid response for Lower Case
  while (true) {
    lowerChoice = prompt("Do you want to include lower case characters?" + '\n' 
    + "Write 'yes' to include or 'no' to not include lower case characters");
    // console.log(lowerChoice);
    if (lowerChoice === null) {
      return null;
    }
    lower = lowerChoice.toLowerCase();
    if (lower == 'no' || lower == 'yes') {
      break;
    } else {
      alert("Invalid input. Try again.");
    }
  }
// checks for valid response for Upper Case
  while (true) {
    upperChoice = prompt("Do you want to include upper case characters?" + '\n' 
    + "Write 'yes' to include or 'no' to not include upper case characters");
    // console.log(upperChoice);
    if (upperChoice === null) {
      return null;
    }
    upper = upperChoice.toLowerCase();
    if (upper == 'no' || upper == 'yes') {
      break;
    } else {
      alert("Invalid input. Try again.");
    }
  }
  // checks for valid response for Numbers
  while (true) {
    numChoice = prompt("Do you want to include numbers?" + '\n' 
    + "Write 'yes' to include or 'no' to not include numbers");
    // If user cancels prompt, exit function, return null.
    if (numChoice === null) {
      return null;
    }
    number = numChoice.toLowerCase();
    if (number == 'no' || number == 'yes') {
      break;
    } else {
      alert("Invalid input. Try again.");
    }
  }
  // checks for valid response for Special Characters
  while (true) {
    specialChoice = prompt("Do you want to include special characters?" + '\n' 
    + "Write 'yes' to include or 'no' to not include special characters");
    // console.log(specialChoice);
    if (specialChoice === null) {
      return null;
    }
    special = specialChoice.toLowerCase();
    if (special == 'no' || special == 'yes') {
      break;
    } else {
      alert("Invalid input. Try again.");
    }
  }
  // Requires the user to select at least one criteria for characters; Continues to loop until at least one is selected
  if (lower == 'no' && upper == 'no' && number == 'no' && special == 'no') {
    alert("You did not select any criteria. Restart.")
  } else {
    break;
  }
}
// Checks for valid response for Password 
while (true) {
  passwordLength = prompt("How many characters do you want in your password?" + '\n' 
  + "Select a value between 8 - 128 inclusive");
  if (passwordLength === null) {
    return null;
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("length is: " + passwordLength);
    break;
  }
  else {
    alert("Invalid input. Try again.");
  }
}
  

console.log("You made it to the generate function");

  function generatePassword() {
    if (lower == 'no') {
      // availableChar.shift();
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("a") !==0;
      });
    } else if (lower == 'yes') {
      console.log("using lower case")
    } 
    console.log("passed lower: " + availableChar);

    if (upper == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("A") !==0;
      });
    } else {
      console.log("use upper case")
    }
    console.log("passed upper: " + availableChar);

    if (number == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("1") !==0;
      });
    } else {
      console.log("use number")
    }
    console.log("passed number: " + availableChar);

    if (special == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("!") !==0;
      });
    }else {
      console.log("use special case")
    }
    console.log("passed special: " + availableChar);

    let userConfirm = confirm("These are your selections for your password:"+'\n'
    + "Lower Case: "+lower+'\n' 
    + "Upper Case: "+upper+'\n' 
    + "Numbers: "+number+'\n' 
    + "Special Characters: "+special+'\n' 
    + "Password Length: "+passwordLength+'\n'+'\n'
    + "Please confirm your selection");

    if (userConfirm === false) {
      alert("You did not confirm your selected criteria. Restart.")
    return null;
    }
    else {
      alert("Confirmed. Generating password");
    }
  
    // flattens array to remove nested quality at a depth of 2
    passwordArray = availableChar.flat(2);
    console.log("Final password chars: " + passwordArray);

    var randomChars;
    var userPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      randomChars = Math.floor(Math.random() * passwordArray.length);
      userPassword += passwordArray[randomChars];
    }
  
    return userPassword;
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




