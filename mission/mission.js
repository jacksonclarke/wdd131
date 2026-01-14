let selectElem = document.querySelector("select");
let logo = document.querySelector("img");
let bodyContent = document.getElementById("page-content");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    logo.setAttribute("src", "../mission/images/byui-logo-white.png");
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#fff";
  } else {
    logo.setAttribute("src", "../mission/images/byui-logo.webp");
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
