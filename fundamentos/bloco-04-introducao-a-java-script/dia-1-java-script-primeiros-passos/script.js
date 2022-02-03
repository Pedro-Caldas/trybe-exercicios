// Exercise with fifteen tasks

// Task 7

const grade = 64;

if (grade >= 90 && grade <= 100) {
    console.log("A")
} else if (grade >= 80 && grade <= 89) {
    console.log("B");
} else if (grade >= 70 && grade <= 79) {
    console.log("C");
} else if (grade >= 60 && grade <= 69) {
    console.log("D");
} else if (grade >= 50 && grade <= 59) {
    console.log("E");
} else if (grade < 50) {
    console.log("F");
} else {
    console.log("error, grade invalid");
}