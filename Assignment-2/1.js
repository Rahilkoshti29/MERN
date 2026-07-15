function filterPalindrome(arr) {
    return arr.filter(word => {
        return word === word.split('').reverse().join('');
    });
}

let arr = ["madam", "racecar", "apple", "level", "hello"];

console.log(filterPalindrome(arr));