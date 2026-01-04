// Find the largest of two numbers.

// function largeNum(arr){
//     let max = arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]> max){
//             return arr[i]
//         }
//     }
// }
// console.log(largeNum([12,22]))

function largeNum(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

console.log(largeNum(4,22))