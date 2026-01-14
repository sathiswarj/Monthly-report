// Count how many times a number appears in an array.

function countNum(arr,x){
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === x){
            count++;
        }
    }
    return count
}
const arr = [1, 2, 3, 2, 4, 2, 5]
const x = 1
console.log(countNum(arr, x))