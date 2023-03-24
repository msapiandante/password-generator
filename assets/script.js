//generateBtn.addEventListener("click", writePassword);
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
//}

  //passwordText.value = password;

// I'm thinking using math function somehwere within JS to pick the length of password. where to put it? I don't know. towards the bottom. what else to put with it? not sure yet Math.floor(Math.random() * 128) + 8;

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\", ";", "@", "#","$","%"]

Var enter;
Var choices;
Var selectNumeric;
Var selectSpecial; 
Var selectUppercase;
Var selectLowercase;
Var password; 

Function generatePassword() {
Enter = prompt(“Password must be between 8 and 128 characters long. Please enter value between 8-128.”); 
If (!enter) {
alert(“Please enter value between 8-128 to continue.”);
} else if (enter < 8 || enter > 128) {
Enter.prompt(Please enter value between 8-128 to continue.”);
Return;
} else {
selectNumeric = confirm(“Include numeric characters?”);
selectSpecial = confirm("Include special characters?");
selectUppercase = confirm("Include uppercase characters?");
selectLowercase = confirm("Include lowercase characters?");
};

if (!selectNumeric && !selectSpecial && !selectUppercase && !selectLowercase) {
    choices = alert("Please select at least 1 character type to proceed.")
    return``;
} else if (selectNumeric && selectSpecial && selectUppercase && selectLowercase) {
    choices = specialChar.concat(numeric,upperCase,lowerCase);
} else if (selectNumberic && selectSpecial && selectUppercase);
    choices = specialChar.concat(numeric,upperCase);
} else if (select numeric && selectSpecial && selectLowercase);
    choices = specialChar.concat(numeric, lowerCase);
