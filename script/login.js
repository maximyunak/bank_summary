const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

const errMessage = document.querySelector(".error");

const logBtn = document.querySelector(".login");

const passwordLocale = localStorage.getItem("password");
const emailLocale = localStorage.getItem("email");

let email = "";
let password = "";

emailInput.addEventListener("input", (e) => {
  email = e.target.value;
});

passwordInput.addEventListener("input", (e) => {
  password = e.target.value;
});

logBtn.addEventListener("click", () => {
  if (email !== emailLocale && password !== passwordLocale) {
    errMessage.textContent =
      "Ошибка в авторизации. Введены неправильные данные";
  } else {
    window.location.href = "./index.html";
  }
});
