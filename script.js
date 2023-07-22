function scrollToSection1() {
  document.querySelector(".section1").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection2() {
  document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection3() {
  document.querySelector(".section3").scrollIntoView({ behavior: "smooth" });
}

function scrollToSection4() {
  document.querySelector(".section4").scrollIntoView({ behavior: "smooth" });
}

function scrollToSection5() {
  document.querySelector(".section5").scrollIntoView({ behavior: "smooth" });
}

const toggle = document.querySelector(".toogle-button");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggle.onclick = function () {
  console.log("click");
  dropDownMenu.classList.toggle("open");
};

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrolled = window.scrollY > 0;

  if (scrolled) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
