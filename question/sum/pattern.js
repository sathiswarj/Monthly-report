// function pattern(arr,k){
//     for (let i=0;i<arr.length;i++){
//        for(let j=1;j<arr.length;j++){
//         if(arr[i]+arr[j] === k){
//             return [i,j]
//         }
//     }
// }      
// }

// function pattern(arr,k){

// let map = new Map()
// for(let i=0;i<arr.length;i++){
//     let needed = k - arr[i]
//     if(map.has(needed)){
//         return [map.get(needed),i]
//     }
//     map.set(arr[i], i)
// }
// return []
// }


function pattern(arr, k){
    arr.sort((a,b)=> a-b)
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === k){
            return [arr[left], arr[right]]
        }
        else if(sum < k){
            left ++
        }else{
            right --
        }
    }
    return false
}
const arr = [2,6,5,8,11]
const k = 14
console.log(pattern(arr,k))