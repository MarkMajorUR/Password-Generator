// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getInputs(){
  var useNumbers = confirm("Would you like Numbers");
  var useLowercase = confirm("Would you like Lowercase Characters");
  var useUppercase = confirm("would you like Uppercase Characters");
  var useSpecial = confirm("Would you like to use Special Charachters");

  var inputArray = [useNumbers, useLowercase, useUppercase, useSpecial]
  return inputArray
}

function generatePassword(){
  var passwordlength = prompt("Pick a password length between 8 and 128 characters")

  if (passwordlength < 8 || passwordlength > 128) {
    alert("Pick a password between 8 and 128 characters")
    return ""
  }

  var inputArray = getInputs()

  var counter = 0;
  var inputLen = inputArray.length

  for(var i = 0; i < inputLen; i++) {
    var isTrue = inputArray[i]

    if (isTrue) {
      counter++
    }
  }

  if (counter == 0) {
    alert("Please choose at least one criteria for password from previous prompts")
    return ""
  }



  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = lowerCase.toUpperCase()
  var special = "~!@#$%^&*()_+-="

  var generatedPassword = ""

  for(var i = 0; i < passwordlength; i++) {
    if(inputArray[0]) { // User would like numbers in password
      var randInt = getRndInteger(0, 9)
      generatedPassword += randInt 
    }

    if(inputArray[1]) { // User would like lowercase in password
      var randInt = getRndInteger(0, 25)
      var lowercaseChar = lowerCase.charAt(randInt)
      generatedPassword += lowercaseChar
    }

    if(inputArray[2]) { // User would like uppercase in password
      var randInt = getRndInteger(0, 25)
      var uppercaseChar = upperCase.charAt(randInt)
      generatedPassword += uppercaseChar
    }

    if(inputArray[3]) { // User would like special characters in password
      var randInt = getRndInteger(0, 14)
      var specialChar = special.charAt(randInt)
      generatedPassword += specialChar
    }
  }

  var slicedPassword = generatedPassword.slice(0, (passwordlength - 1))

  return slicedPassword
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if(password != "") {
    alert("Password: " + password)
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
