let selectElem = document.querySelector("select");
let logo = document.querySelector("img");
let bodyContent = document.getElementById("page-content");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    logo.setAttribute("src", "byui-logo-white.png");
    document.body.classList.add("dark-mode");
  } else {
    logo.setAttribute("src", "byui-logo.webp");
    document.body.classList.remove("dark-mode");
  }
}
