// function pattern(arr){
//     let maxSum = -Infinity;
//     let currentSum = 0;
//     for(let i=0;i<arr.length;i++){
//         currentSum += arr[i]
//         if(currentSum > maxSum){
//             maxSum = currentSum
//         }
//         if(currentSum < 0){
//             currentSum = 0
//         }
//     }
//     return maxSum;
// }

// console.log(pattern([-2,1,-3,4,-1,2,1,-5,4])) // 6
// console.log(pattern([-1])) // 1
// console.log(pattern([5,4,-1,7,8])) // 23

function pattern(arr){
    let max = -Infinity;
    for(let i=0;i<arr.length;i++){
     let sum = 0;
     for(let j=i;j<arr.length;j++){
        sum += arr[j]
        if(sum > max){
            max = sum
        }
     }
    }
    return max;
}

console.log(pattern([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(pattern([-1])) // 1
console.log(pattern([5,4,-1,7,8])) // 23