let petz = new Array("goldfish", "cat", "dog", "hamster");
console.log(petz.length);

petz[3] = "guinea pig";
petz.push("ferret");
console.log(petz);

const steps = ["one", "two", "three"];

// Function declarartion and call VVV

// steps.forEach(function(item){
// console.log(item);
// });

steps.forEach(showStep);

function showStep(item) {
  console.log(item);
}

// .map calls function but creates a new array from the original.

let myList = document.getElementById("myList");

const stepsHTML = steps.map(listTemplate);

function listTemplate(item) {
  return `<li>${item}</li>`;
}

myList.innerHTML = stepsHTML.join("");

let grades = ["A", "b", "D"];

let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
  switch (grade.toUpperCase()) {
    case "A":
      points = 4;
      break;
    case "B":
      points = 3;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
    case "F":
      points = 0;
      break;
    default:
      alert("not a valid grade");
  }
  return points;
}

console.log(gpaPoints);

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
  return total + item;
}

let gpa = totalPoints / gpaPoints.length;
console.log(gpa);

console.log(totalPoints);

// ------------------------------------------------------
// Stuff from class assignment                          |
// ------------------------------------------------------

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = words.filter(function(word){
    return word.length < 6;
});

console.log(shortWords);

const students = [
  { last: "Andrus", first: "Aaron" },
  { last: "Masa", first: "Manny" },
  { last: "Tanda", first: "Tamanda" },
];

const classes = [
  {name: "WDD131", credits: 2},
  {name: "CSE170", credits: 2},
  {name: "ITM455", credits: 4}
];

let container = document.getElementById("classes");

classes.forEach(function(item){
  let name = document.createElement('div');

  let html = `
  <span>${item.name}</span> 
  <span>${item.credits}</span>
  <hr>
  `;

  name.innerHTML = html;
  container.appendChild(name);
});
