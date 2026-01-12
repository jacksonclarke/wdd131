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
let selectElem = document.getElementById("webdevlist");
selectElem.addEventListener("change", function () {
  let codeValue = selectElem.value;
  console.log(codeValue);
  if (codeValue === "html") {
    document.querySelector("#html").style.color = "blue";
  }
});

const newPara = document.createElement("p");
newPara.innerText = "Added with Javascript";
document.body.appendChild(newPara);
