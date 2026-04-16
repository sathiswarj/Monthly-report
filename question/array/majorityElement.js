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


// function pattern(arr){
//     let map = new Map()
//     for(let i=0;i<arr.length;i++){
//         map.set(arr[i],(map.get(arr[i]) || 0) + 1)
//         if(map.get(arr[i]) > Math.floor(arr.length/2)){
//             return arr[i]
//         }
//     }
// }

function pattern(arr){
    let count = 0;
    let element = 0;
    for(let i=0;i<arr.length;i++){
        if(count === 0){
            element = arr[i]
        }
        if(arr[i] === element){
            count++;
        }
        else{
            count--;
        }
    }
    count = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] === element){
            count++;
        }
    }
    return count > Math.floor(arr.length/2) ? element : -1;
}

const arr = [2,2,1,1,1,2,2]
console.log(pattern(arr))