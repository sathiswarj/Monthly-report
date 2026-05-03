// function pattern(arr){
//     for(let i=0;i<arr.length;i++){
//         let count = 0;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//             if(count > arr.length/2){
//                 return arr[i];  
//             }
//         }   
//     }
// }


function pattern(arr){
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0) + 1)
        if(map.get(arr[i]) > Math.floor(arr.length/2)){
            return arr[i]
        }
    }
}

//Inside the loop, this line updates the count for the current element arr[i] in the map.
// map.get(arr[i]) retrieves the current count for arr[i] (or undefined if it doesn't exist yet).
//(map.get(arr[i]) || 0) uses the logical OR (||) to default to 0 if the key isn't in the map (handles the first occurrence).
// + 1 increments the count by 1.
// map.set(arr[i], ...) stores this new count back into the map for the key arr[i].
// This effectively counts how many times each unique element appears in the array.
// map.get(arr[i]) gets the updated count for the current element arr[i].
// Math.floor(arr.length/2) calculates half the array length, rounded down (e.g., for length 7, it's 3; for length 8, it's 4).
// The condition checks if the current element's count exceeds this half-length threshold (strictly greater than, so more than n/2).
// If true, it means arr[i] is the majority element (appears more than half the time).




// function pattern(arr){
//     let count = 0;
//     let element = 0;
//     for(let i=0;i<arr.length;i++){
//         if(count === 0){
//             element = arr[i]
//         }
//         if(arr[i] === element){
//             count++;
//         }
//         else{
//             count--;
//         }
//     }
//     count = 0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[j] === element){
//             count++;
//         }
//     }
//     return count > Math.floor(arr.length/2) ? element : -1;
// }

const arr = [2,2,1,1,1,2,2]
console.log(pattern(arr))




var majorityElement = function(nums) {
    let count = 0;
    let element = 0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        if(count === 0){
            element = num
        }
        if(num === element){
            count++;
        }
        else{
            count--;
        }
    }
    count=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]===element){
            count++;
        }
    }
    return count > Math.floor(nums.length/2) ?  element : -1;
};

 var majorityElement = function(nums) {
 let count = 0;
 let element  = 0;
 for(let i=0;i<nums.length;i++){
let num = nums[i]
    if(count === 0){
        element = num
    }
    else if(element === num){
        count++;
    }
    else{
        count--;
    }
 }
count = 0;
for(let j=0;j<nums.length;j++){
    if(nums[j] === element){
        count++
    }
}
 return count > Math.floor(nums.length/2) ? element : -1

 }