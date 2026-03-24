// // Move Zeros to End

//  function moveZeroes(nums) {
//      let temp =[]
//      for(let i=0;i<nums.length;i++){
//         if(nums[i] !== 0 ){
//             temp.push(nums[i])
//         }
//      }
//      for(let j=0;j<temp.length;j++){
//         nums[j] = temp[j]
//      }
//      for(let k=temp.length;k<arr.length;k++){
//         nums[k] = 0
//      }
//      return nums
// }

// const arr = [1, 0, 2, 3, 1, 4, 11, 0, 1, 0]
// console.log(moveZeroes(arr))


function moveZeroes(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[count] = arr[i]
            count++;
        }
    }
    for(let j=count;j<arr.length;j++){
        arr[j] = 0
    }
    return arr
}

const arr = [1, 0, 2, 3, 1, 4, 11, 0, 1, 0]
console.log(moveZeroes(arr))