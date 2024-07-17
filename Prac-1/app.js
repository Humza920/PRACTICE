// 1
// let userInput = prompt("Enter a number")
// userInput % 5 === 0? console.log(userInput + " is a multiple of 5"):console.log(userInput + " is not a multiple of  5");

// 2
let userMarks = prompt("Enter your marks");
if (userMarks >= 80 && userMarks <= 100) {
  console.log("Grade A");
} else if (userMarks >= 70 && userMarks <= 79) {
  console.log("Grade B");
} else if (userMarks >= 60 && userMarks <= 69) {
  console.log("Grade C");
} else if (userMarks >= 50 && userMarks <= 59) {
  console.log("Grade D");
} else if (userMarks >= 0 && userMarks <= 49) {
  console.log("Grade F");
}
else{console.log("YOU ARE DOING SOME MISTAKES WHILE ENTERING YOUR MARKS")}