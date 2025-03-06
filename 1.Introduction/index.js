//! Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName".

// Data Structure is a specific way of organizing,storing and accessing data
// Alogorithm is an step by step solution of the problem

// Data Structure 👇
const arr = ["raj", "kumar", "sai", "revi", "sam"];

// Algorithm for Finding Specific User 👇
function students(allStudents, studentName) {
  for (var student of allStudents) {
    if (student === studentName) {
      return `${studentName} found!`;
    }
  }
  return `${studentName} not Found!`;
}
console.log(students(arr, "ramu"));
console.log(students(arr, "raj"));
