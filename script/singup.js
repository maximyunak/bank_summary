const dropdown = document.querySelector(".header__page3");

if (dropdown) {
  const items = dropdown.querySelectorAll(".block");

  items.forEach((item) => {
    const answer = item.querySelector(".dropdown__answer");

    item.addEventListener("click", (el) => {
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".dropdown__items")
            .classList.remove("active");
        }
      });

      if (el.target.className !== "dropdown__item") {
        item.querySelector(".dropdown__items").classList.toggle("active");
      } else {
        answer.textContent = el.target.textContent;
        if (answer.textContent !== "Не указано") {
          answer.classList.add("active");
        } else {
          answer.classList.remove("active");
        }

        item.querySelector(".dropdown__items").classList.toggle("active");
      }
    });
  });
}

let pageNow = 1;


const nextAll = document.querySelectorAll(".button-next");
const prevAll = document.querySelectorAll(".button-prev");

const page1 = document.querySelector(".header__page1");
const page2 = document.querySelector(".header__page2");
const page3 = document.querySelector(".header__page3");
const page4 = document.querySelector(".header__page4");

const headerTitle = document.querySelector('.header__title')

page1.classList.add("active");

nextAll.forEach((next) => {
  next.addEventListener("click", () => {
    if (pageNow !== 4) {
        pageNow++;
      }
    if (pageNow === 1) {
      page2.classList.remove("active");
      page4.classList.remove("active");
      page3.classList.remove("active");
      page1.classList.add("active");
    } else if (pageNow === 2) {
      page1.classList.remove("active");
      page4.classList.remove("active");
      page3.classList.remove("active");
      page2.classList.add("active");
    } else if (pageNow === 3) {
      page2.classList.remove("active");
      page1.classList.remove("active");
      page4.classList.remove("active");
      page3.classList.add("active");
    } else if (pageNow === 4) {
        page2.classList.remove("active");
        page1.classList.remove("active");
        page3.classList.remove("active");
        page4.classList.add("active");
      }
  });
});

prevAll.forEach((prev) => {
  prev.addEventListener("click", () => {
    if (pageNow !== 1) {
      pageNow--;
    }
    if (pageNow === 1) {
      page2.classList.remove("active");
      page3.classList.remove("active");
      page4.classList.remove("active");
      page1.classList.add("active");
    } else if (pageNow === 2) {
      page1.classList.remove("active");
      page3.classList.remove("active");
      page4.classList.remove("active");
      page2.classList.add("active");
    } else if (pageNow === 3) {
      page2.classList.remove("active");
      page1.classList.remove("active");
      page4.classList.remove("active");
      page3.classList.add("active");
    } else if (pageNow === 4) {
        page2.classList.remove("active");
        page1.classList.remove("active");
        page3.classList.remove("active");
        page4.classList.add("active");
      }
  });
});


// inputs 

const passwordInput = document.querySelector('.password')
const emailInput = document.querySelector('.email')

let password = ''
let email = ''


passwordInput.addEventListener('input', (e) => {
  password = e.target.value
})

emailInput.addEventListener('input', (e) => {
  email = e.target.value
})

nextAll.forEach((next) => {
  next.addEventListener('click', () => {
    localStorage.setItem('password', password)
    localStorage.setItem('email', email)
  })
})