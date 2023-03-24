//generateBtn.addEventListener("click", writePassword);
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
//}

  //passwordText.value = password;

// I'm thinking using math function somehwere within JS to pick the length of password. where to put it? I don't know. towards the bottom. what else to put with it? not sure yet Math.floor(Math.random() * 128) + 8;


var passwordLength = []
for (var i = 8; i <= 128; i++) {
    passwordLength.push(i)
}
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\", ";", "@", "#","$","%"]