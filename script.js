function scrollToSection1() {
  document.querySelector(".section1").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection2() {
  document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection3() {
  document.querySelector(".section3").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("wheel", function (event) {
  event.preventDefault();

  const delta = event.deltaY;

  if (delta > 0) {
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
  } else if (delta < 0) {
    document.querySelector(".section1").scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
  },
  { passive: true }
);

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrolled = window.scrollY > 0;

  if (scrolled) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const buttons = document.querySelectorAll("[data-carousel-button]")
const theme = document.querySelector(".project-title");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    if (newIndex === 0) {
        theme.textContent = "E-commerce shop";
      } else if (newIndex === 1) {
        theme.textContent = "Snake game";
      } else if (newIndex === 2) {
        theme.textContent = "Project 3";
      }

    

  })
})