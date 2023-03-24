var passwordLength = []
for (var i = 8; i <= 128; i++) {
    passwordLength.push(i)
}

console.log(passwordLength)
//need arrays defined for different types of character types//
var upperCase =[]
var lowerCase = []
var numeric = []
var specialChar = [] 



// I'm thinking using math function somehwere within JS to pick the length of password. where to put it? I don't know. towards the bottom. what else to put with it? not sure yet Math.floor(Math.random() * 128) + 8;