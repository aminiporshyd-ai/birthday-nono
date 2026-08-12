const correctPassword = "14041214";

const passwordBox = document.getElementById("passwordBox");
const giftBox = document.getElementById("giftBox");

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");


/* =========================
   باز کردن هدیه
========================= */

function openGift() {

    errorMessage.textContent = "";

    passwordInput.disabled = true;
    enterButton.disabled = true;

    passwordBox.classList.add("hide");

    setTimeout(() => {

        giftBox.classList.add("show");

    }, 650);
}


/* =========================
   بررسی رمز
========================= */

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        openGift();

    } else {

        errorMessage.textContent =
            "الرمز غلط جربی بعد مرهههه ❤️";

        passwordInput.value = "";

        passwordInput.focus();

        passwordBox.classList.remove("shake");

        void passwordBox.offsetWidth;

        passwordBox.classList.add("shake");

    }
}


/* =========================
   دکمه
========================= */

enterButton.addEventListener("click", checkPassword);


/* =========================
   کلید Enter
========================= */

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkPassword();

    }

});
