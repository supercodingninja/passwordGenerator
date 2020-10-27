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

var charIndexList = [];

var password = "";
// var password = [lowerAlpha + upperAlpha + baseTen + specChar]; // // ?Need pw to be random? //

//  Write Logic, here: Prompts for pw length, Confirms for character sets, etc. //
function getPassword() {
    // I need to inform the user what type of characters are allowed (lowerAlpha, upperAlpha, baseTen, or specChar); and informed the user combination of the characters (lowerAlpha + upperAlpha + baseTen + specChar) are accepted. //
    alert('You may choose the length of your password being generated; and the type of characters it may have (special characters, lower/upper case, and numbers, or any combination of the four options).');

    // I need the user to pick a password length, prescribed by the guidelines. Ref. Links: https://www.w3schools.com/jsref/jsref_parseint.asp; and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt //
    const pwBase = parseInt(prompt('Choose a desire password length, between 8 and 128 characters.'));

        // If user picks a length below or higher than password allotment, I need the user to be reminded of the password length allowance. //
        if (pwBase < 8 || pwBase > 128) {
            alert('You Must choose a length no greater than 12; and not fewer than 6 characters.');
        }
    
        // If user picks a number that is not an integer.  Ref. Link: https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false //
        else if (Number.isInteger(false)) {
            alert('Please speak to your direct supervisor regarding your complications.');
            return;
        }

    // I need to ask the user characters preference. //
        // I need to work on ConfirmBox[ref. links: https://github.com/xxjapp/xdialog; https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options https://www.npmjs.com/package/yesno-dialog; http://jsfiddle.net/kevalbhatt18/qwkzw3rg/127/] user "Do you want lowercase characters?" //
        // function confirm {
        //     xdialog.confirm('Do you want lowercase characters?')
        // }; {
        //     style: 'width: 300px; font-size:1em;'
        //     buttons {
        //         Ok: "Yes";
        //         Cancel: "No";
        //         };
        //     }

        // Use instead//
        let lowerAlpha =confirm('Do you want lowercase characters?');
            
            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //
            if (lowerAlpha == true) {
                
                charIndexList = charIndexList.concat(lowerAlpha);
            }

        // Prompt user "Do you want uppercase characters?" //
        let upperAlpha =confirm('Do you want to use uppercase characters?');

            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //
            if (upperAlpha == true) {
                
                charIndexList = charIndexList.concat(upperAlpha);

            }

        // Prompt user "Do you want numeric characters?" //
        let baseTen =confirm('Do you want numeric characters?');

            // If user chooses  "Yes;" then push to "charIndexList;" and begin next prompt. //
            if (baseTen == true) {
                
                charIndexList = charIndexList.concat(baseTen);
            
            }

        // Prompt user "Do you want special characters?" //
        let specChar =confirm('Do you want to use special characters?');

        // If user chooses  "Yes;" then push to "charIndexList;" then select random characters, and return getPassword. //
        if (specChar == true) {
                
            charIndexList = charIndexList.concat(specChar);
        
        }

        // If user chose "No" to all character options, then alert user that a mininmum of one option must be selected "Yes." //
        if (!lowerAlpha && !upperAlpha && !baseTen && !specChar) {

            alert('You MUST choose one of the four character types criterea.  Please speak to your direct supervisor regarding your complications.');

            return;

        }

        // Make a set of random characters from the charIndexList. //
        while (password.length <= pwBase) {

            let ranChar = charIndexList[Math.floor(Math.random() * charIndexList.length)];
            
            // DO NOT FORGET TO APPEND "charIndexList" to a STRING "" //
            password += ranChar;
        }

    return password;     

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
// document.getElementById('#confirm').addEventListener('click,' confirm)
pwBtn.addEventListener("click", writePassword);

// jQuery stab in the dark to check event listener.  Ref. Link: https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript //
// events = $._data(this, 'click');
//  for ("click", writePassword) {
//    events[click].forEach(function (event) {
//      console.log(event['handler']);
//    });
//  }