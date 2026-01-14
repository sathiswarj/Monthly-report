// function secondLong(arr){
//     var largest = arr[0]
//     var secondLargest = -1;
//     for(let i=0;i<arr.length;i++){
//         if(largest<arr[i]){
//             secondLargest =  largest
//             largest =  arr[i]
//         }
//         else if(arr[i]< largest && secondLargest < arr[i]){
//             secondLargest =  arr[i]
//         }
//     }
//     return secondLargest
// }

// const arr = [1,2,3,4,5]
// console.log(secondLong(arr))


function longNum(arr1){
    var largest = arr1[0]
     for(let i=0;i<arr1.length;i++){
        if(largest<arr1[i]){
             largest =  arr1[i]
        }
     
    }
    return largest
}

const arr1 = [1,2,3,4,5]
console.log(longNum(arr1))