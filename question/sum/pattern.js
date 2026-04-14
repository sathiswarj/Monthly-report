// function pattern(arr,k){
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[i] + arr[j] === k){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

function pattern(arr, k) {
    // Map is like a smart storage (dictionary)
    // It stores data like this:

    // key → value
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let needed = k - arr[i]
        if (map.has(needed)) {
            return [map.get(needed), i]
            //It gives the value stored for that key
        }
        map.set(arr[i], i)
        let map = new Map();

        // map.set(5, 0);
        // map.set(2, 1);

        // Now inside map:

        // {
        //   5 → 0,
        //   2 → 1
        // }
    }
    return []
}

// function pattern(arr, k){
//     let map = new Map()
//     for(let i=0;i<arr.length;i++){
//         let needed = k -arr[i]
//         if(map.has(needed)){
//             return [map.get(needed),i]
//         }
//         map.set(arr[i], i)
//     }
//     return[]
// }


function pattern(arr,k){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === k){
            return [arr[left], arr[right]]
        }
        else if(sum < k){
            left++;
        }
        else{
            right--;
        }
    }
    return []
}
const arr = [2, 6, 5, 8, 11]
const k = 14
console.log(pattern(arr, k))