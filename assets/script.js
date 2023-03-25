var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\", ";", "@", "#","$","%"]
var enter;
var choices;
var selectNumeric; 
var selectSpecial; 
var selectUppercase; 
var selectLowercase; 
var password; 
var generateBtn;

function generatePassword() {
enter = prompt("Password must be between 8 and 128 characters long. Please enter value between 8-128."); 
if (!enter) {
    alert("Please enter value between 8 and 128 to continue.")
} else if (enter < 8 || enter > 128) {
enter = prompt("Please enter value between 8-128 to continue.") 
return;
} else {
selectNumeric = confirm("Include numeric characters?");
selectSpecial = confirm("Include special characters?");
selectUppercase = confirm("Include uppercase characters?");
selectLowercase = confirm("Include lowercase characters?");
};

if (!selectNumeric && !selectSpecial && !selectUppercase && !selectLowercase) {
    choices = alert("Please select at least 1 character type to proceed.")
 return``;

} else if (selectNumeric && selectSpecial && selectUppercase && selectLowercase) {
    choices = specialChar.concat(numeric,upperCase,lowerCase);

} else if (selectNumeric && selectSpecial && selectUppercase); {
    choices = specialChar.concat(numeric,upperCase); 
} else if (selectNumeric && selectSpecial && selectLowercase); {
    choices = specialChar.concat(numeric, lowerCase);
} else if (selectSpecial && selectUppercase && selectLowercase); {
    choices = specialChar.concat(upperCase,lowerCase)

} else if (selectNumeric && selectSpecial && selectLowercase); {
    choices = numeric.concat(specialChar, lowerCase);

} else if (selectNumeric && selectSpecial && selectUppercase); {
    choices = numeric.concat(specialChar, upperCase);

} else if (selectNumeric && selectUppercase && selectLowercase); {
    choices = numeric.concat(lowerCase, upperCase);

} else if (selectUppercase && selectLowercase && specialSpecial); {
    choices = upperCase.concat(lowerCase,specialChar);

} else if (selectUppercase && selectLowercase && selectNumeric); {
    choices = upperCase.concat(lowerCase, numeric);

} else if (selectUppercase && selectSpecial && selectNumeric); {
    choices = upperCase.concat(specialChar,numeric);

} else if (selectLowercase && selectNumeric) {
    choices = lowerCase.concat(numeric);

} else if (selectLowercase && selectUppercase) {
    choices = lowerCase.concat(upperCase);

} else if (selectNumeric && selectUppercase) {
    choices = numeric.concat(upperCase);

} else if (selectSpecial) {
    choices = specialChar;

} else if (selectNumeric) {
    choices = numeric;

} else if (selectLowercase) {
    choices = lowerCase;

} else if (selectUppercase) {
    choices = upperCase;
} else 

for (var i = 0; i < enter.length; i++) {
    var pickChoices = choices[Math.floor(Math.random() *choices.length)]
    password.push(pickChoices);
 }return;
}

generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password; 

}
 
generatePassword();
writePassword();
