function scrollToSection(section) {
  console.log(section);
  document.querySelector(`${section}`).scrollIntoView({ behavior: "smooth" });
  dropDownMenu.classList.toggle("open");
  checkOpen();
}

const toggle = document.querySelector(".toogle-button");
const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownMenuIcon = document.querySelector(".toogle-button i");

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
