import { total, percentage, grade } from "./result3.js";

let marks = [85, 90, 75, 80, 95];

let valid = true;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0 || marks[i] > 100) {
        valid = false;
    }
}

if (valid) {

    let t = total(marks);
    let p = percentage(marks);
    let g = grade(p);

    console.log("Marks:", marks);
    console.log("Total:", t);
    console.log("Percentage:", p + "%");
    console.log("Grade:", g);

}
else {
    console.log("Invalid marks");
}