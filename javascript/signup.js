const EYE = document.getElementById("eye");
const EYE1 = document.getElementById("eye4");
const EYE2 = document.getElementById("eye6");

const PASSWORD = document.getElementById("password");
const PASSWORD1 = document.getElementById("newpassword");
const PASSWORD2 = document.getElementById("confirmpassword");

const SIGNUP = document.getElementById("sign-up");
const SIGNIN = document.getElementById("sign-in");
const FORM1 = document.getElementById("form1");
const CREATEBUTTON = document.getElementById("create-btn");

const emailAddress =  document.getElementById("emailaddress");
const firstName =  document.getElementById("firstname");
const lastName =  document.getElementById("lastname");


const EYES = [EYE, EYE1, EYE2];
const PASSWORDS = [PASSWORD, PASSWORD1, PASSWORD2];

let value;

const passwordVisibility = () => {
    if (EYES[value].classList[1] == "fa-eye-slash"){
        EYES[value].classList.replace("fa-eye-slash", "fa-eye");
        PASSWORDS[value].type = "text";
    } else {
        EYES[value].classList.replace("fa-eye", "fa-eye-slash");
        PASSWORDS[value].type = "password";
    }
}

const clearForm = () => {
    document.getElementById("error5").textContent = "";
    document.getElementById("error4").textContent = "";
    document.getElementById("error3").textContent = "";
    document.getElementById("error2").textContent = "";
    document.getElementById("error1").textContent = "";
}

EYE.addEventListener("click", () => {
    value = 0;
    passwordVisibility();
})

EYE1.addEventListener("click", () => {
    value = 1;
    passwordVisibility();
})

EYE2.addEventListener("click", () => {
    value = 2;
    passwordVisibility();
})


CREATEBUTTON.addEventListener("click", (event) => {
    document.getElementById("error5").textContent = "";
    document.getElementById("error4").textContent = "";
    document.getElementById("error3").textContent = "";

    if (emailAddress.value && firstName.value && lastName.value && PASSWORD1.value && PASSWORD2.value){
        if (PASSWORD1.value == PASSWORD2.value && PASSWORD1.value.length >= 8){
            alert("Success");
        } else if (PASSWORD1.value != PASSWORD2.value && PASSWORD1.value.length >= 8) {
            event.preventDefault();
            document.getElementById("error5").textContent = "*The two passwords do not match each other*";
        } else if (PASSWORD1.value.length < 8) {
            event.preventDefault();
            document.getElementById("error4").textContent = "*Password is less than 8 digits*";
        }
    }
})

SIGNUP.addEventListener("click", () => {
    clearForm();

    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "flex";
})

SIGNIN.addEventListener("click", () => {
    clearForm();

    document.getElementById("form1").style.display = "flex";
    document.getElementById("form2").style.display = "none";
})


