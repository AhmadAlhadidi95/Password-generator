let button = document.getElementById("generator-btn");
let field = document.getElementById("field");
let copyBtn = document.querySelector(".password-box i");

button.addEventListener("click", () => {

    let lengthOfPassword = document.getElementById("length").value;

    let theCharacter = ``;

    if (document.getElementById("lowercase").checked) theCharacter += "abcdefghijklmnopqrstuvwxyz";

    if (document.getElementById("uppercase").checked) theCharacter += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbers = document.getElementById("numbers").checked) theCharacter += "123456789";

    if (document.getElementById("symbols").checked) theCharacter += "!@#$%^&*()-_=+[]{};:\",.<>/?\\|`~";

    if (!theCharacter) {

        Swal.fire({
            icon: "error",
            title: "Please select at least one character type!",
            background: "#4a0847",
            color: "#fbe9fe",
            iconColor: "#e04ee7",
            confirmButtonColor: "#e04ee7",
        });

        return;
        
    };

    let thePassword = ``;

    for (let i = 0; i < lengthOfPassword; i++) {

        thePassword += theCharacter[Math.floor(Math.random() * theCharacter.length)];
        
    };

    field.value = thePassword;

    copyBtn.style.cssText = "visibility: visible; opacity: 1";

});

copyBtn.onclick = () => {
    
    navigator.clipboard.writeText(field.value)
    .then(() => {

        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            background: "#4a0847",
            color: "#fbe9fe",
            iconColor: "#e04ee7",

            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "success",
            title: "Password copied to clipboard"
        });
            
    })
    .catch((error) => {

        Swal.fire({
            background: "#4a0847",
            color: "#fbe9fe",
            iconColor: "#e04ee7",
            confirmButtonColor: "#e04ee7",
            icon: "error",
            title: `Failed to copied password " ${error}`,
            showConfirmButton: false,
            timer: 1500
        });

    })

};