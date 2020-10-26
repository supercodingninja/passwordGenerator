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

// Variables of Arrays Containing Alpha-Numeric-Special Characters Allowed For Password Being Generated, Ref. link: [https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery] //
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(lowerAlpha);

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ".split("");
    console.log(upperAlpha);

var baseTen = "0123456789".split("");
    console.log(baseTen);

var specChar = "~!@#$%^&*?".split("");
    console.log(specChar);

var charIndexList = [''];

var password = "";
// var password = [lowerAlpha + upperAlpha + baseTen + specChar]; // // ?Need pw to be random? //

//  Write Logic, here: Prompts for pw length, Confirms for character sets, etc. //
function getPassword {
    // I need to inform the user what type of characters are allowed (lowerAlpha, upperAlpha, baseTen, or specChar); and informed the user combination of the characters (lowerAlpha + upperAlpha + baseTen + specChar) are accepted. //
    prompt('You may choose the length of your password being generated; and the type of characters it may have (special characters, lower/upper case, and numbers, or any combination of the four options).')

    // I need the user to pick a password length, prescribed by the guidelines. Ref. Links: https://www.w3schools.com/jsref/jsref_parseint.asp; and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt //
    const pwBase = parseInt (prompt('Choose a desire password length, between 6 and 12 characters.'));

        // If user picks a length below or higher than password allotment, I need the user to be reminded of the password length allowance. //
        if (pwBase < 6 || pwBase > 12) {
            alert('You Must choose a length no greater than 12; and not fewer than 6 characters.')
        }
        // If user still picks a value less than 6. //
        else (pwBase < 6) {
            alert('Your length desired is too, small!  Choose a number between 6 and 12.')
        }
        // If user still picks a value higher than 12. //
        else (pwBase > 12) {
            alert('Your option is too, high!  Choose a number between 6 and 12.')
        }
        // If user picks a number that is not an integer.  Ref. Link: https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false //
        else if Number.isInteger(false) {
            alert('Please speak to your direct supervisor regarding your complications.');
        }

        // If user picks a length within guidelines, began push character length into new variable "charIndexList" (DECLARE THIS VARIABLE INTO AN ARRAY); and move forward to asking user preference on character types. //
        else if (pwBase => 6 || pwBase =< 12) {
            push.pwBase.charIndexList; // ? ASK TA during office hours //
        }

    // I need to ask the user characters preference. //
        // ConfirmBox[ref. https://www.npmjs.com/package/yesno-dialog; http://jsfiddle.net/kevalbhatt18/qwkzw3rg/127/; https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options] user "Do you want lowercase characters?" //
            
            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //

            // If user chooses "No;" then move forward to next prompt. //

        // Prompt user "Do you want uppercase characters?" //

            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //

            // If user chooses "No;" then move forward to next prompt. //

        // Prompt user "Do you want numeric characters?" //

            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //

            // If user chooses "No;" then move forward to next prompt. //

        // Prompt user "Do you want special characters?" //

        // If user chooses  "Yes;" then push to "charIndexList;" then select random characters, and return getPassword. //

            // If user chooses "No;" then check user options. //

                // If user chose "No" to all character options, then alert user that a mininmum of one option must be selected "Yes." //

        // Make a set of random characters from the charIndexList. //

            // DO NOT FORGET TO APPEND "charIndexList" to a STRING ""

    return getPassword;     
}

// Write function to generate to a password to the #password input //
function writePassword() {
    var password = getPassword();
        console.log(password);

    var passwordText = document.querySelector("#password");
        console.log(passwordText);

    passwordText.value = password;
        console.log(password);

        return writePassword;
}
  
// Add event listener to password generating button //
pwBtn.addEventListener("click", writePassword);
alert("click", writePassword);

// jQuery stab in the dark to check event listener.  Ref. Link: https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript //
// events = $._data(this, 'click');
//  for ("click", writePassword) {
//    events[click].forEach(function (event) {
//      console.log(event['handler']);
//    });
//  }