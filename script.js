const toggleNav = () => {
  if (!menuOpen) {
    Burgermenu.classList.add("open");
    menuOpen = true;

    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
    Burgermenu.classList.remove("open");
    menuOpen = false;
  }
};

let Burgermenu = document.querySelector(".menu-btn");

let menuOpen = false;
const nav = document.getElementById("nav-items");

Burgermenu.addEventListener("click", () => {
  toggleNav();
});

nav.addEventListener("click", () => {
  toggleNav();
});
