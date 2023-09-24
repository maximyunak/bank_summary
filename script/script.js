const header = document.querySelector(".header");

const burger = document.querySelector(".header__burger");
const buttons = document.querySelector(".header__btns");
const singup = document.querySelector(".header__singup");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  singup.classList.toggle("active");
  buttons.classList.toggle("active");
  body.classList.toggle("active");
});

const login = document.querySelector(".header__login");
const module = document.querySelector(".module");
const close = document.querySelector(".module__close");

module.style.opacity = "0";
module.style.visibility = "hidden";

login.addEventListener("click", () => {
  module.style.opacity = "1";
  module.style.visibility = "visible";
  body.classList.add("active");
  burger.classList.toggle("active");
  buttons.classList.toggle("active");
});

close.addEventListener("click", () => {
  module.style.opacity = "0";
  module.style.visibility = "hidden";
  body.classList.remove("active");
});

const radio1 = document.querySelector("#for-rector");
const radio2 = document.querySelector("#for-sois");

const text1 = document.querySelector(".for-r-text");
const text2 = document.querySelector(".for-s-text");

radio1.checked = true;

text1.addEventListener("click", () => {
  radio1.checked = true;
});

text2.addEventListener("click", () => {
  radio2.checked = true;
});

const moreContent = document.querySelector(".anons__contentmore");
const moreBtn = document.querySelector(".anons__show-button");

isShow = false;

moreBtn.addEventListener("click", () => {
  moreContent.classList.toggle("show");
  moreBtn.classList.toggle("active");
  isShow = !isShow;
  isShow
    ? (moreBtn.innerHTML = `Скрыть`)
    : (moreBtn.innerHTML = `Смотреть ещё`);
});

const showBtn = document.querySelectorAll(".connection__show-btn");

isVisible = false;

showBtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (isVisible) {
      el.setAttribute("src", "./img/minus-circle.svg");
      isVisible = !isVisible;
    } else {
      el.setAttribute("src", "./img/plus-circle.svg");
      isVisible = !isVisible;
    }
  });
});
