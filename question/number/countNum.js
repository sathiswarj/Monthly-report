// Count how many times a number appears in an array.

function countNum(arr){
    let freq = {}
    for(let i=0;i<arr.length;i++){
        let char = arr[i]
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}

console.log(countNum([1,1,2,2,2,3,3,3,3,4,4,4,4,4]))