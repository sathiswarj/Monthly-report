// Count how many times a number appears in an array.

function freqNum(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        freq[num] = (freq[num] || 0) + 1
    }
    return freq
}

const arr = [1, 2, 2, 1, 3, 3, 3, 4]
console.log(freqNum(arr))