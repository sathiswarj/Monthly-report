// function sorted(arr){
//     for(let i=1;i<arr.length;i++){
//         if(arr[i-1] < arr[i]){
//         }
//         else{
//             return false
//         }
//     }
//     return true
// }

// console.log(sorted([1,21,3]))


function isSorted(arr){
    let isAscending = false
    let isDescending = false
    for(let i=0;i<arr.length;i++){
        if(arr[i-1] <  arr[i]){
            isAscending = true
        } if(arr[i-1] > arr[i]){
            isDescending = true
        }
    }
      if (isAscending && isDescending) {
        return false;
    } else {
        return true;
    }
}

console.log(isSorted([1,2,3]))
console.log(isSorted([3,2,1]))
console.log(isSorted([3,2,4]))