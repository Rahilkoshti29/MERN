function generateOddNumbers(n) {
    let oddNumbers = [];

    for (let i = 1; i <= n * 2; i += 2) {
        oddNumbers.push(i);
    }

    return oddNumbers;
}


console.log(generateOddNumbers(50));