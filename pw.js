// Variables Created; Create/Append Markup to HTML Elements (tag); DON'T FORGET TO PUT "" INSIDE THE SPAN TAG; i. e. <span>"..."</span>. //
var headerOne = document.querySelector("h1");
headerOne.innerHTML="<span>Password Generator</span>"
    
var headerTwo = document.querySelector("h2");
    headerTwo.innerHTML="<span>Generate A Password</span>"

var pwBtn = document.querySelector("#pw");
    pw.innerHTML="<span>Generate Password</span>"

// Variables of Arrays Containing Alpha-Numeric-Special Characters Allowed For Password Being Generaated, Ref. link: [https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery] //
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ".split("");

var baseTen = "0123456789".split("");

var specChar = "~!@#$%^&*?".split("");

// Write function to generate to a password to the #password input //
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    //  Write Logic, here: Prompts for pw length, Confirms for character sets, etc. // 

    return password;
}
  
// Add event listener to password generating button //
pwBtn.addEventListener("click", writePassword);