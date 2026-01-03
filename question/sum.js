// Find the sum of all elements in an array.

// function sumElements(arr){
//     let sum = 0;
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }

// const arr= [1,2,3,4,5]
// console.log(sumElements(arr))

//  Find the average of array elements

function sumElements(arr){
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum/arr.length
}

const arr= [1,2,3,4,5]
console.log(sumElements(arr))