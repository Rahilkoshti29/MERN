import {
    circle,
    rectangle,
    triangle
} from "./area4.js";

let radius = 5;
let length = 10;
let width = 5;
let base = 8;
let height = 6;

if (radius <= 0 ||
    length <= 0 ||
    width <= 0 ||
    base <= 0 ||
    height <= 0) {

    console.log("Invalid dimensions");

}
else {

    console.log("Circle:", circle(radius));

    console.log(
        "Rectangle:",
        rectangle(length, width)
    );

    console.log(
        "Triangle:",
        triangle(base, height)
    );
}