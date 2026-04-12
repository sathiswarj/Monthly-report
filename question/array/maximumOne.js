function pattern(arr) {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count += 1
            if (maxCount < count) {
                maxCount = count
            }
        }else{
            count = 0;
        }
    }
    return maxCount
}

console.log(pattern([1,1,0,1,1,1,0,1,1]))