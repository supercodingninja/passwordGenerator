// Variables Created; Create/Append Markup to HTML Elements (tag); DON'T FORGET TO PUT "" INSIDE THE SPAN TAG; i. e. <span>"..."</span>. //
var headerOne = document.querySelector("h1");
headerOne.innerHTML="<span>Password Generator</span>"
    console.log(headerOne);
    
var headerTwo = document.querySelector("h2");
    headerTwo.innerHTML="<span>Generate A Password</span>"
    console.log(headerTwo);

var pwBtn = document.querySelector("#pw");
    pw.innerHTML="<span>Generate Password</span>"
    console.log(pwBtn);

// Variables of Arrays Containing Alpha-Numeric-Special Characters Allowed For Password Being Generaated, Ref. link: [https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery] //
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(lowerAlpha);

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ".split("");
    console.log(upperAlpha);

var baseTen = "0123456789".split("");
    console.log(baseTen);

var specChar = "~!@#$%^&*?".split("");
    console.log(specChar);

// Write function to generate to a password to the #password input //
function writePassword() {
    var password = generatePassword();
        console.log(password);

    var passwordText = document.querySelector("#password");
        console.log(passwordText);

    passwordText.value = password;
        console.log(password);
        
    //  Write Logic, here: Prompts for pw length, Confirms for character sets, etc. //
    

    return password;
}
  
// Add event listener to password generating button //
pwBtn.addEventListener("click", writePassword);
alert("click", writePassword);

// jQuery stab in the dark to check event listener.  Ref. Link: https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript //
events = $._data(this, 'click');
 for (writePassword) {
   events[click].forEach(function (event) {
     console.log(event['handler']);
   });
 }