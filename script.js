var count = 0;
var passwordEl = document.querySelector("#password");
var passContainer = document.getElementById("#passContainer")


passwordEl.addEventListener("click", function () {

    var passwordLength = prompt("Please select a number greater than 8 ?")
    var passwordLengthNumber = parseInt(passwordLength)

    if (passwordLengthNumber > 8) {
        // var numSymb = confirm("Would you like to have any numbers in your password ?");
        var specialSymb = confirm("Would you like a special symbol in your password");
        // var upperCase = confirm(" Would you like to have an upper case letter in your password ?");

  
    }
    else {
        alert("please enter another number higher than 8")
    }

    if (specialSymb ===true) { passwordGenerator(specialSymb) 

    }

    else {
        alert("please select to have a special symbol in the password")
    }

    // if (upperCase) { }

    // else {
    //     alert("please select to have an upper case letter")
    // }

    // if (numSymb) { }
    // else { alert("please select to have a number in your password") }


    
    function passwordGenerator(shouldIncludeSpecialSymb) {
   
        var result = ''
        var characters = 'abcdefghijklmnopqesrtuvwxyz';
        var charactersLength = passwordLength;
        // var numbers = '123456789';
        var specialSymb = '!@#$%^&*()<>?:"{}|-,./;' 
        // var shouldIncludeSpecialSymb = '';
        
        // if (shouldIncludeSpecialSymb === true) {
        //     characters *= specialSymb
        // }

        for (var i=0; i< passwordLength; i++){
            result+= specialSymb.charAt(Math.floor(Math.random() * charactersLength)) + characters.charAt(Math.floor(Math.random() * charactersLength));
                        }

        // for (var i = 0; i < passwordLength; i++) {
        //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
        // }
        // if and else for odd use special symb for even special characters 



        alert("your password is " + result);
    
        displayPassword(result)
    
    }

    

    function displayPassword(result) {
        var passDisplay = document.createElement("p");
        var passDisplayWord = document.createTextNode(
            "your password is " + result);
        passDisplay.appendChild(passDisplayWord);
        document.body.appendChild(passDisplay);



    }
    // displayPassword()

    // console.log(displayPassword)
});



