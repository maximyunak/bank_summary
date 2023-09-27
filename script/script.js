const header = document.querySelector(".header");

const burger = document.querySelector(".header__burger");
const buttons = document.querySelector(".header__mobile");
const singup = document.querySelector(".header__singup");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  singup.classList.toggle("active");
  buttons.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
});

const login = document.querySelector(".header__login");
const module = document.querySelector(".module");
const close = document.querySelector(".module__close");
const card = document.querySelector(".module__card");

module.style.opacity = "0";
module.style.visibility = "hidden";

login.addEventListener("click", () => {
  module.style.opacity = "1";
  module.style.visibility = "visible";
  body.classList.add("active");
  burger.classList.toggle("active");
  buttons.classList.toggle("active");
  module.setAttribute("data-visible", "true");
});

close.addEventListener("click", () => {
  module.style.opacity = "0";
  module.style.visibility = "hidden";
  body.classList.remove("active");
  module.setAttribute("data-visible", "false");
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

const showBtn = document.querySelectorAll(".questions__show-btn");
const showDesc = document.querySelectorAll(".questions__hide");
const showTitle = document.querySelectorAll(".questions__answer");
const showContent = document.querySelectorAll(".questions__answer-show");

showContent.forEach((el, i) => {
  el.addEventListener("click", () => {
    const desc = showDesc[i];
    const title = showTitle[i];
    title.classList.toggle("active");
    desc.classList.toggle("active");

    const isVisible = showBtn[i].getAttribute("data-visible") === "true";

    if (isVisible) {
      showBtn[i].setAttribute("src", "./img/plus-circle.svg");
      showBtn[i].setAttribute("data-visible", "false");
    } else {
      showBtn[i].setAttribute("src", "./img/minus-circle.svg");
      showBtn[i].setAttribute("data-visible", "true");
    }
  });
});

const module2Btn = document.querySelector(".questions__button-q");
const module2Btn2 = document.querySelector(".module2__btn");
const module2 = document.querySelector(".module2");
const module2Close = document.querySelector(".module2__close");
const module2Card = document.querySelector(".module2__card");

function openModal() {
  module2.style.opacity = "1";
  module2.style.visibility = "visible";
  body.classList.add("active");
  module2.setAttribute("data-visible", "true");
}

module2Btn.addEventListener("click", () => openModal());
module2Btn2.addEventListener("click", () => openModal());

module2Close.addEventListener("click", () => {
  module2.style.opacity = "0";
  module2.style.visibility = "hidden";
  body.classList.remove("active");
  module2.setAttribute("data-visible", "false");
});

body.addEventListener("click", (event) => {
  if (
    event.target !== module2Btn &&
    event.target !== module2Btn2 &&
    event.target !== module2Card &&
    event.target !== login &&
    !header.classList.contains('active')
  ) {
    module2.style.opacity = "0";
    module2.style.visibility = "hidden";
    module2.setAttribute("data-visible", "false");
    module.style.opacity = "0";
    module.style.visibility = "hidden";
    module.setAttribute("data-visible", "false");
    body.classList.remove('active')
    
  }
  if (module2.getAttribute("data-visible") === "true") {
    body.classList.add("active");
  } else if (
    module2.getAttribute("data-visible") === "true" &&
    !burger.classList.contains("active")
  ) {
    body.classList.remove("active");
  }
});

module2Card.addEventListener("click", (e) => {
  e.stopPropagation();
});

card.addEventListener("click", (e) => {
  e.stopPropagation();
});

