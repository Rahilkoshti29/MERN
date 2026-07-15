function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    str = str.toLowerCase();

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World Example of vowels"));