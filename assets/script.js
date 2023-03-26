var generateBtn = document.querySelector("#generate");
var enter;
var choices;
var selectNumeric;
var selectSpecial;
var selectUppercase;
var selectLowercase;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "\"", "\\", ";", "@", "#", "$", "%"]
var password = []

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    enter = prompt("Password must be between 8 and 128 characters long. Please enter value between 8-128.");

if (!enter) {
    alert("Please enter value between 8 and 128 to continue.")
} else if (enter < 8 || enter > 128) {
    enter = prompt("Please enter value between 8-128 to continue.")

} else {
    selectNumeric = confirm("Include numeric characters?");
    selectSpecial = confirm("Include special characters?");
    selectUppercase = confirm("Include uppercase characters?");
    selectLowercase = confirm("Include lowercase characters?");
};

if (selectNumeric && selectSpecial && selectUppercase && selectLowercase);
    choices = specialChar.concat(numeric, upperCase, lowerCase);

    for (var i = 0; i < enter.length; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)]
        password.push(pickChoices);
    }
    return password.join("");
};
