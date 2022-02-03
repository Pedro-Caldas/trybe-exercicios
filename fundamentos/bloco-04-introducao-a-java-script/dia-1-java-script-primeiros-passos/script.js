// Exercise with fifteen tasks

// Task 3

const a = 100;
const b = 79;
const c = 1;

if (a < 0 || b < 0 || c < 0) {
    console.log("Error, invalid angle");
} else if ((a + b + c) == 180) {
    console.log(true);
} else {
    console.log(false);
}