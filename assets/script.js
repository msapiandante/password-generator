// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = [];
 
    for (var i = 8; i <= 128; i++) {
       passwordLength.push(i);
    }
 
    console.log(passwordLength)

window.prompt(passwordLength)

//var characterTypes = ["special characters", "no special characters"] //use confirm method for character type//

//console.log(characterTypes)//

  // Ask user for their choice
  var userChoice = window.prompt("Enter number between 8 and 128 for password legnth");

  //var userChoice2 = window.prompt2("Does password include special characters?")//

  
  
  //if (userChoice.includes(passwordLength)) {
    //prompt2();
  // else if (userChoice2.includes(characterTypes)) {
    //writePassword();
   //

