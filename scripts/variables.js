const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;
console.log("Area of circle:", area);

const one = 1;
const two = 2;

let result = one + two;
console.log("Sum:", result);

// Scope
let course = "CSE131"; // Global scope
if (true) {
  let student = "Jackson"; // Block scope
  console.log("Inside block:", course, student);
}
// console.log("Outside block:", student); // This would cause an error
console.log("Outside block:", course, "Error, 'student' is not defined");
