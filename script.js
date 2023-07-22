function scrollToSection(section) {
  console.log(section);
  document.querySelector(`${section}`).scrollIntoView({ behavior: "smooth" });
  dropDownMenu.classList.toggle("open");
  checkOpen();
}

const toggle = document.querySelector(".toogle-button");
const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownMenuIcon = document.querySelector(".toogle-button i");
const animText = document.querySelector(".text-anim");

toggle.onclick = function () {
  console.log("click");
  dropDownMenu.classList.toggle("open");
  checkOpen();
};

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const scrolled = window.scrollY > 0;

  if (scrolled) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const checkOpen = () => {
  const isOpen = dropDownMenu.classList.contains("open");
  dropDownMenuIcon.classList = isOpen
    ? "fa-solid fa-x fa-xl"
    : "fa-solid fa-bars fa-xl";
};
const text = "web developer";
let letter = " ";

let index = 0;
const animationDelay = 300;
const initialDelay = 2000;
let direction = 1;

function animateLetter() {
  if (direction === 1) {
    letter += text[index];
    animText.textContent = letter;
    index++;

    if (index === text.length) {
      direction = -1;
      setTimeout(animateLetter, animationDelay);
    } else {
      setTimeout(animateLetter, animationDelay);
    }
  } else {
    letter = letter.slice(0, -1);
    animText.textContent = letter;

    if (letter.length === 0) {
      direction = 1;
      index = 0;
      setTimeout(animateLetter, animationDelay);
    } else {
      setTimeout(animateLetter, animationDelay);
    }
  }
}

setTimeout(animateLetter, initialDelay);

addEventListener("resize", function () {
  if (window.innerWidth > 800 && dropDownMenu.classList.contains("open")) {
    dropDownMenu.classList.remove("open");
    dropDownMenuIcon.classList = "fa-solid fa-bars fa-xl";
  }
});
