// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numeric = ['0','1','2','3','4','5','6','7','8','9']
var specialCharacters =['%','!','@','#','$','^','&','*','(',')','+','<','>','?']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var newPassword = ""
  var passwordLength = prompt("How long do you want your password?")
  console.log(passwordLength)
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please provide a number between 8-128")
  return
}


//  code for the prompts
  var hasLowerCase = confirm("Do you want to use lowercase?")
  console.log(hasLowerCase)
  var hasUpperCase = confirm("Do you want to use uppercase?")
  console.log(hasUpperCase)
  var hasNumeric = confirm("do you want to use numbers?")
  console.log(hasNumeric)
  var hasSpecialCharacters = confirm("Do you want to use special characters?")
  console.log(hasSpecialCharacters)


  var result=[]
  if (lowerCase) {
    result = result.concat(lowerCase);
  }

  if(upperCase) {
    result = result.concat(upperCase);
  }

  if (numeric) {
    result = result.concat(numeric);
  }

  if (specialCharacters) {
    result = result.concat(specialCharacters)
  }
  console.log(result)

// for loop
  var randomPassword=""

  for (let index = 0; index < passwordLength; index++) {
    randomPassword = randomPassword + result[Math.floor(Math.random() * result.length)];
    console.log(randomPassword)
  }

  return randomPassword

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);