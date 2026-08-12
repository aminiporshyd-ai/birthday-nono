const correctPassword = "14041214";

const passwordBox = document.getElementById("passwordBox");
const giftBox = document.getElementById("giftBox");

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");

function openGift() {
    passwordBox.classList.add("hide");

    setTimeout(() => {
        giftBox.classList.add("show");
    }, 500);
}

function checkPassword() {
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        errorMessage.textContent = "";

        passwordInput.disabled = true;
        enterButton.disabled = true;

        openGift();

    } else {

        errorMessage.textContent =
            "الرمز غلط جربی بعد مرههه ❤️";

        passwordInput.value = "";

        passwordInput.focus();
    }
}

enterButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
