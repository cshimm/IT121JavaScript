// HW 3 - Making the grade
// Cameron Shimmin
// 1/19/23

var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

// Split grades array into array of students and sort alphabetically
const students = grades.split(", ").sort();

// Variables for grade calculations
let highest = 0;
let lowest = Infinity;
let average = 0;
let runningTotal = 0;

// Loop through the students 
students.forEach(s => {
  // Create an array for each student, element 0 being the name, element 1 being the grade
  const student = s.split("|");
  
  // Capitalize first letter, concatenate with rest of name and store as string
  const studentName = student[0][0].toUpperCase() + student[0].substring(1);
  // convert grade string to int and store
  const studentGrade = parseInt(student[1]);

  // Compare current grade to the highest grade, if higher, highest variable to the current grade
  if (studentGrade > highest){
    highest = studentGrade;
  }
  // Compare current grade to the lowest grade, if lower, set lowest variable to the current grade
  if (studentGrade < lowest){
    lowest = studentGrade;
  }

  // Add each grade to a running total
  runningTotal += studentGrade;

  // Display student name and grade
  document.write(`* ${studentName} - ${studentGrade}`);
  document.write("<br>");
});

//Compute average grade with runningTotal variable
if (students.length > 0){ //Check to make sure we're not dividing by 0
  average = runningTotal / students.length;
}

// Display number of students
document.write(`<br>* Total number of students: ${students.length}`);

// Display highest, lowest and average grade
document.write("<br>");
document.write(`* Highest Grade: ${highest}<br>`);
document.write(`* Lowest Grade: ${lowest}<br>`);
document.write(`* Average Grade: ${average}<br>`);