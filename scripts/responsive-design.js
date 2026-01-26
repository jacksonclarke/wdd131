let menu = document.querySelector(".menu-btn");
let navigation = document.querySelector("nav");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  navigation.classList.toggle("hide");
  menu.classList.toggle("change");
}
