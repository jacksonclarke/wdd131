// Query selector gets an element by CSS selector
let title = document.querySelector("h1");
console.log(title);

title.textContent = "Web Page Components";

// Get element by ID and change its style
document.getElementById("topics").style.color = "red";
// OR
// let topicsElem = document.getElementById("topics");
// topicsElem.style.color = "red";

let list = document.querySelector(".list");
list.style.border = "3px solid black";
// Or
//let classList = document.getElementsByClassName("listitem");

let para = document.querySelector("p");
//para.classList.add("background");

para.style.backgroundColor = "#000";

// IMAGE Editing

let image = document.querySelector("img");
image.setAttribute("src", "../ponder/images/logos.png");
// OR
//image.src = "../ponder/images/logos.png";

// Class starting code
let cssId = document.querySelector("#css");
let htmlId = document.querySelector("#html");
let jsId = document.querySelector("#js");

let selectElem = document.getElementById("webdevlist");
selectElem.addEventListener("change", function () {
  let codeValue = selectElem.value;
  console.log(codeValue);
  // ----------------------
  // HTML
  // if (codeValue === "html") {
  //   document.querySelector("#html").style.color = "blue";
  // } else {
  //   document.querySelector("#html").style.color = "red";
  // }
  // ----------------------
  // CSS
  // if (codeValue === "css") {
  //   document.querySelector("#css").style.color = "blue";
  // } else {
  //   document.querySelector("#css").style.color = "red";
  // }
  // ----------------------
  // JS
  // if (codeValue === "js") {
  //   document.querySelector("#js").style.color = "blue";
  // } else {
  //   document.querySelector("#js").style.color = "red";
  // }
  // ----------------------
  // document.getElementById(codeValue).style.color = "blue";
  // ----------------------
  // BEST OPTION
  // Loop through options
  for (let option of selectElem.options) {
    if (option.value === "default") continue; // skip "Choose One:"

    if (option.value === codeValue) {
      document.getElementById(option.value).style.color = "blue";
    } else {
      document.getElementById(option.value).style.color = "red";
    }
  }
});

const newPara = document.createElement("p");
newPara.innerText = "Added with Javascript";
document.body.appendChild(newPara);
