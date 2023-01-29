// const toggleNav = () => {
//   if (!menuOpen) {
//     Burgermenu.classList.add("open");
//     menuOpen = true;

//     nav.classList.add("show");
//   } else {
//     nav.classList.remove("show");
//     Burgermenu.classList.remove("open");
//     menuOpen = false;
//   }
// };

// let Burgermenu = document.querySelector(".menu-btn");

// let menuOpen = false;
// const nav = document.getElementById("nav-items");

// Burgermenu.addEventListener("click", () => {
//   toggleNav();
// });

// nav.addEventListener("click", () => {
//   toggleNav();
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Animation
  hamburger.classList.toggle("toggle");
});
