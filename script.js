var count = 0;
var passwordEl = document.querySelector("#password");

passwordEl.addEventListener("click", function () {
    var numSymb = false;
    var specialSymb = false;
    var upperCase = false;

    var passwordLength = prompt("Please select a number greater than 8 ?")
    var passwordLengthNumber = parseInt(passwordLength)

    if (passwordLengthNumber > 8) {
        var numSymb = confirm("Would you like to have any numbers in your password ?");
        var specialSymb = confirm("Would you like a special symbol in your password");
        var upperCase = confirm(" Would you like to have an upper case letter in your password ?");

        passwordGenerator(numSymb, specialSymb, upperCase)

  
    }
    else {
        alert("please refresh the page and enter another number higher than 8")
    }

    if (specialSymb) { }

    else {
        alert("please select to have a special symbole in the password")
    }

    if (upperCase) { }

    else {
        alert("please select to have an upper case letter")
    }

    if (numSymb) { }
    else { alert("please select to have a number in your password") }



    function passwordGenerator(shouldIncludespecialSymb, shouldIncludeUpperCase, shouldIncludeNumSymb) {
        var result = specialSymb, upperCase, numSymb;
        var characters = 'abcdefghijklmnopqesrtuvwxyz';
        var charactersLength = passwordLength;
        var numbers = '123456789';
        var specialsymbol = '!@#$%^&*()<>?:"{}|-,./;'


        for (var i = 0; i < passwordLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        alert("your password is " + result);
    }

    

    function displayPassword() {
        var passDisplay = document.createElement("p");
        var passDisplayWord = document.createTextNode("your password is" + result);
        passDisplay.appendChild(passDisplayWord);
        document.body.appendChild(passDisplay);


    }
        console.log(displayPassword)
});



