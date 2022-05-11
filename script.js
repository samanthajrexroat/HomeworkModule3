

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


// Declaring these variables as empty arrays  
var finalPassword = []
var userChoices = []

// Declaring this variable in global memory
var passwordLengthPrompt;

// The generatePassword function calls userLengthPreference.
function generatePassword(){
  userLengthPreference();
  // the num variable takes the given user length and returns a string 
  var num = parseInt(passwordLengthPrompt) - finalPassword.length
  for(var i = 0; i < num; i++){
    finalPassword.push(userChoices[Math.floor(Math.random()*userChoices.length)])
  }
  var password = finalPassword.join("")
  return password
}
// The userLengthPreference function prompts the user to enter a number for the length of their
// password.  The console logs the response.  The user is required to enter a number between
// 8 and 128 or they are alerted of that fact.
function userLengthPreference() {
  passwordLengthPrompt = prompt("How long would you like your password to be?")
  
  if (passwordLengthPrompt > 128 || passwordLengthPrompt < 8){
    alert("Password must be between 8 and 128 characters.");
    return
  } 

  // The user is asked whether they would like to include certain characters in their password
  var hasNumbers = confirm("Would you like numbers in your password?")
  var hasUppercase = confirm("Would you like uppercase letters in your password?")
  var hasLowercase = confirm("Would you like lowercase letters in your password?")
  var hasSpecialCharacters = confirm("Would you like special characters in your password?") 

  // If the user selects OK to a character type, they will be included in a new concatenated array
  // declared in global memory called userChoices.  
  if (hasNumbers){
    userChoices = userChoices.concat(numbersArray);
    // This variable will add a random number to an empty array called finalPassword
    var number = numbersArray[Math.floor(Math.random()*numbersArray.length)]
    finalPassword.push(number);
  }

  if (hasUppercase){
    userChoices = userChoices.concat(upperCaseArray);
    // Adds an uppercase letter to finalPassword
    var uppercase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]
    
    finalPassword.push(uppercase);
  }

  if (hasLowercase){
    userChoices = userChoices.concat(lowerCaseArray);
    // Adds a lowercase letter to finalPassword
    var lowercase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]
    
    finalPassword.push(lowercase);
  }
  if (hasSpecialCharacters){
    userChoices = userChoices.concat(specialCharactersArray);
    // Adds special characters to finalPassword
    var specialcharacters = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]
    
    finalPassword.push(specialcharacters);
  }

  return finalPassword;
}

// Write password to the #password input
// The first function to be called at the click event.  It will trigger the
// generatePassword funtion. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// The first thing that happens!
generateBtn.addEventListener("click", writePassword)