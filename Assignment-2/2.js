function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

let arr = [10, 50, 30, 20, 40];
console.log(secondLargest(arr));