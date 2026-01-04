//  Find the largest number in an array.

// function largeNum(arr){
//     let largest = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(largest < arr[i]){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// const arr = [4,5,2,21,8]
// console.log(largeNum(arr))

// Find the second largest number.



function largeNum(arr){
    let largest = arr[0];
    let secondLargest = -1;
    for(let i=0;i<arr.length;i++){
        if(largest < arr[i]){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] < largest && secondLargest < arr[i]){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

const arr = [4,5,21,8,14]
console.log(largeNum(arr))
