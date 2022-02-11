

// Creates a button that selects the generate id from the DOM.
var generateBtn = document.querySelector("#generate");

// Declaring the arrays that will be needed for the criteria
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var specialCharactersArray = ['@','%','+','/',"'",'!','#','$','^','?',':',
    ',',')','(','}','{',']','[','~','-','_','.']


// Declaring these variables as arrays  
var finalPassword = []
var userChoices = []

// Declaring this variable in global memory
var passwordLengthPrompt;


function generatePassword(){
  userLengthPreference();
  var num = parseInt(passwordLengthPrompt) - finalPassword.length
  for(var i = 0; i < num; i++){
    finalPassword.push(userChoices[Math.floor(Math.random()*userChoices.length)])
  }
  var password = finalPassword.join("")
  return password
}
function userLengthPreference() {
  passwordLengthPrompt = prompt("How long would you like your password to be?")
  console.log(passwordLengthPrompt);
  if (passwordLengthPrompt > 128 || passwordLengthPrompt < 8){
    alert("Password must be between 8 and 128 characters.");
    return
  } 


  var hasNumbers = confirm("Would you like numbers in your password?")
  var hasUppercase = confirm("Would you like uppercase letters in your password?")
  var hasLowercase = confirm("Would you like lowercase letters in your password?")
  var hasSpecialCharacters = confirm("Would you like special characters in your password?") 


  if (hasNumbers){
    userChoices = userChoices.concat(numbersArray);
    var number = numbersArray[Math.floor(Math.random()*numbersArray.length)]
    finalPassword.push(number);
  }

  if (hasUppercase){
    userChoices = userChoices.concat(upperCaseArray);
    console.log(userChoices);
    var uppercase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]
    console.log(uppercase);
    finalPassword.push(uppercase);
  }

  if (hasLowercase){
    userChoices = userChoices.concat(lowerCaseArray);
    var lowercase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]
    console.log(lowercase);
    finalPassword.push(lowercase);
  }
  if (hasSpecialCharacters){
    userChoices = userChoices.concat(specialCharactersArray);
    var specialcharacters = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]
    console.log(specialcharacters);
    finalPassword.push(specialcharacters);
  }

  console.log(finalPassword);
  console.log(userChoices);
  return finalPassword;
}



// Write password to the #password input
// The first function to be called at the click event.  It will trigger the
// generatePassword funtion, then target the password id.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// The first thing that happens!
generateBtn.addEventListener("click", writePassword)
