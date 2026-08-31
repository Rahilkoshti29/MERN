function evenOdd(num) {

    if (num % 2 == 0)
        return "Even";
    else
        return "Odd";
}

function positiveNegative(num) {

    if (num >= 0)
        return "Positive";
    else
        return "Negative";
}

export {positiveNegative,evenOdd}