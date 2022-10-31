// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// This function will start running when the button is clicked
function writePassword() {

  // character arrays
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numChar = '1234567890'.split('');
  var specialChar = '!@#$%^&*()?~'.split('');

  // Declares array consisting of all possible criteria
  var availableChar = Array();
  // Places character array at given index. This creates an array of arrays
  availableChar[0] = lowerChar;
  availableChar[1] = upperChar;
  availableChar[2] = numChar;
  availableChar[3] = specialChar;

    
  // Response when button is initially clicked; Inform user of purpose
  alert("This tool will walk you through steps to select the criteria for your new password" + '\n' 
  + "You have the following options: " 
  + '\n' + "- Lower Case Letters" + '\n' 
  + "- Upper Case Letters" + '\n' 
  + "- Special Characters" + '\n' 
  + "- Select the length of your password");

  // declare variables that correlate to user inputs
  var lowerChoice = "";
  var upperChoice = "";
  var numChoice = "";
  var specialChoice = "";
  var lower = "";
  var upper = "";
  var number = "";
  var special = "";
  var passwordLength = "";

  // Put prompts in while loop(s) until user selects valid response or cancels a prompt.
  // Outer While loop checks for the case where the user selects 'no' on all criteria and program requests the user reselect criteria.
  while (true) {
    // checks for valid response for Lower Case
    while (true) {
      lowerChoice = prompt("Do you want to include lower case characters?" + '\n' 
      + "Write 'yes' to include or 'no' to not include lower case characters");
      // If user cancels prompt, exit function, return null.
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
      // If user cancels prompt, exit function, return null.
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
      // If user cancels prompt, exit function, return null.
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
    // Requires the user to select at least one criterion for characters; Continues to loop through main while loop
    //  until at least one is selected
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
    // If user cancels prompt, exit function, return null.
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
  
  // This function considers the user's inputs to create a random password from selected criteria
  function generatePassword() {
    // If the user does NOT want to use lower case, the availableChar array filters out the element that begins with lower case 'a'
    // It is important to note that availableChar is an array of arrays. The element that begins with 'a' is also an array itself, 
    // so removing the element beginning with 'a' removes the array containing all lower case letters.
    if (lower == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("a") !==0;
      });
    } else if (lower == 'yes') {
      console.log("using lower case")
    } 

    // If the user does NOT want to use upper case, the availableChar array filters out the element that begins with upper case 'A'
    // It is important to note that availableChar is an array of arrays. The element that begins with 'A' is also an array itself, 
    // so removing the element beginning with 'A' removes the array containing all upper case letters.
    if (upper == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("A") !==0;
      });
    } else {
      console.log("use upper case")
    }

    // If the user does NOT want to use numbers, the availableChar array filters out the element that begins with '1'
    // It is important to note that availableChar is an array of arrays. The element that begins with '1' is also an array itself, 
    // so removing the element beginning with '1' removes the array containing all numbers.
    if (number == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("1") !==0;
      });
    } else {
      console.log("use numbers")
    }

    // If the user does NOT want to use special characters, the availableChar array filters out the element that begins with '!'
    // It is important to note that availableChar is an array of arrays. The element that begins with '!' is also an array itself, 
    // so removing the element beginning with '!' removes the array containing all special characters designated by developer.
    if (special == 'no') {
      availableChar = availableChar.filter(function (item) {
        return item.indexOf("!") !==0;
      });
    }else {
      console.log("use special characters")
    }

    // Prompts the user to confirm their previous selection.
    let userConfirm = confirm("These are your selections for your password:"+'\n'
    + "Lower Case: "+lower+'\n' 
    + "Upper Case: "+upper+'\n' 
    + "Numbers: "+number+'\n' 
    + "Special Characters: "+special+'\n' 
    + "Password Length: "+passwordLength+'\n'+'\n'
    + "Please confirm your selection");
    // If the user cancels the prompt, the program will end, requesting the user to begin again.
    if (userConfirm === false) {
      alert("You did not confirm your selected criteria. Exiting Program.")
    return null;
    }
    // If the user accepts the confirmation prompt, they will be alerted that their password will be generated.
    else {
      alert("Confirmed. Generating password. Click 'OK' to view password");
    }
  
    // flattens array to remove nested quality at a depth of 2 (array of arrays)
    // the passwordArray removed all nested arrays and all characters are stored as single elements
    passwordArray = availableChar.flat(2);
    console.log("Final password chars: " + passwordArray);

    var randomChars;
    var userPassword = "";
    // Based on the user's desired password length, a random password will be generated using only the criteria the 
    // user previously selected
    for (var i = 0; i < passwordLength; i++) {
      randomChars = Math.floor(Math.random() * passwordArray.length);
      userPassword += passwordArray[randomChars];
    }
    // The generatePassword() function returns the newly-created password. This value can be accessed by creating a variable to 
    // store the function as show below in var password = generatePassword();
    return userPassword;
  };

  // This variable contains the return value of the function generatePassword();
  var password = generatePassword();
  // locates the element in HTML that will be updated according to the new password
  var passwordText = document.querySelector("#password");
  // sets the value based on the above function's return
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




