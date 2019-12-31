var count = 0;
var passwordEl = document.querySelector("#password");
var passContainer = document.getElementById("#passContainer")
var copyEl = document.querySelector("#copy")
var slider = document.getElementById("myRange");
var output = document.getElementById("passLengthSlider");
var passwordLength = slider.value



output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

passwordEl.addEventListener("click", function () {


    var specialSymb = document.getElementById("specialSymb").checked
    if (specialSymb === true) {

    }
    else {
        alert("please check the special symbol box") 

    return}
    var numbSymb = document.getElementById("numSymb").checked
    if (numbSymb === true) {
        console.log("here")
        // passwordGenerator(numSymb)
    }
    else { alert("please check the number box") 
return }


    passwordGenerator()


})






function passwordGenerator() {

    var result = ''
    var characters = 'abcdefghijklmnopqesrtuvwxyz';
    var charactersLength = passwordLength;
    var numbers = '123456789';
    var specialSymb = '!@#$%^&*()<>?:"{}|-,./;'
    console.log(passwordLength)


    for (var i = 0; i < passwordLength / 3; i++) {
        result += specialSymb.charAt(Math.floor(Math.random() * charactersLength)) +
            characters.charAt(Math.floor(Math.random() * charactersLength))
            + numbers.charAt(Math.floor(Math.random() * charactersLength));
    }



    var displayResult = result % 2

    alert("your password is " + result);

    displayPassword(result)

}



function displayPassword(result) {
    var passDisplay = document.getElementById("psw")


    // var passDisplay = document.createElement("textarea")
    // passDisplay.setAttribute("id", "copyPassword")



    // we have added the randomly generated password to the correct input field 
    var yourPass = document.createElement("div")

    var passDisplayWord = document.createTextNode(result);
    var yourPassText = document.createTextNode("your randomly generated password is")
    yourPass.appendChild(yourPassText)
    document.body.appendChild(yourPass)
    passDisplay.appendChild(passDisplayWord);
    document.body.appendChild(passDisplay);
    passDisplay.value = result
    copy.classList.remove("invalid");
    copy.classList.add("valid");
    document.getElementById("copy").disabled = false




};
// changed our copy target to the correct field as well 
copyEl.addEventListener("click", function () {

    console.log("this was clicked ")

    var copyPassword = document.getElementById("psw");
    copyPassword.select();
    document.execCommand("copy");
    alert("password has been copied");
    console.log(copyPassword)

    document.getElementById("psw").value = ''
});


var myInput = document.getElementById("psw");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specialCharacter = document.getElementById("specialCharacter")
document.getElementById("copy").disabled = true;

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters


    // /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
    // Validate special characters
    var specialCharacterSelect = /[!@#$%^&*(),.?":{}|<>]/g
    if (myInput.value.match(specialCharacterSelect)) {
        console.log("match")
        var specialCharacterCheck = document.getElementById("specialSymb")
        specialCharacterCheck.checked = true

    }


    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        (console.log("numbers"))
        copy.classList.remove("invalid");
        copy.classList.add("valid");
        document.getElementById("copy").disabled = false
       var numberCheck = document.getElementById("numSymb")
       numberCheck.checked = true
    }

    // Validate length
    if (myInput.value.length >= 8) {
        (console.log("passwordLength"))
        var lengthCheckBox = document.getElementById("passwordLength")
        lengthCheckBox.checked = true
        // console.log(lengthCheck)
    }
}
var numbers = /[0-9]/g;
var specialCharacterSelect = /[!@#$%^&*(),.?":{}|<>]/g
if (myInput.value.match(numbers) && myInput.value.length >= 8 && myInput.value.match(specialCharacterSelect)) 
    {
        (console.log("valid password"))} 














