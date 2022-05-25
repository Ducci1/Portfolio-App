const EYE = document.getElementById("eye");
const PASSWORD = document.getElementById("password")

EYE.addEventListener("click", () => {
    if (EYE.classList[1] == "fa-eye-slash"){
        EYE.classList.replace("fa-eye-slash", "fa-eye");
        PASSWORD.type = "text";
    } else {
        EYE.classList.replace("fa-eye", "fa-eye-slash");
        PASSWORD.type = "password";
    }
})
