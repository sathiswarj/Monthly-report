function secondLargest(arr) {
    let largest = arr[0]
    let secondLargest = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([1, 2, 30, 4, 50]));