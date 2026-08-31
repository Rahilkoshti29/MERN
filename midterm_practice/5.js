import {
    evenOdd,
    positiveNegative
} from "./numberUtils5.js";

let num = 10;

if (typeof num !== "number" || isNaN(num)) {

    console.log("Invalid number");

}
else {

    console.log("Number:", num);

    console.log(
        "Even/Odd:",
        evenOdd(num)
    );

    console.log(
        "Positive/Negative:",
        positiveNegative(num)
    );
}