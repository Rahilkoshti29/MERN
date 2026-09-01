function total(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    return sum;
}

function percentage(marks) {
    return total(marks) / marks.length;
}

function grade(per) {
    if (per >= 90)
        return "A";
    else if (per >= 75)
        return "B";
    else if (per >= 60)
        return "C";
    else if (per >= 50)
        return "D";
    else
        return "F";
}

export {total,percentage,grade}