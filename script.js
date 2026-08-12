const correctPassword = "14041214";

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");

enterButton.addEventListener("click", function () {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        errorMessage.textContent = "تم فتح الهدية ❤️";

        setTimeout(function () {
            alert("هله هله اب احله قمرررر ❤️");
        }, 300);
    } else {
        errorMessage.textContent = "الرمز غير صحيح، حاولي مرة أخرى ";
        passwordInput.value = "";
        passwordInput.focus();
    }
});

passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        enterButton.click();
    }
});
