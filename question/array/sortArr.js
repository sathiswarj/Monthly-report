// function pattern(arr){
//     let count0 = 0;
//     let count1 = 0;
//     let count2 = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0)
//             count0++;
//         else if(arr[i] === 1)
//             count1++;
//         else
//             count2++;
//     }
//      for(let j=0;j<count0;j++){
//         arr[j] = 0;
//     }
//     for(let k=count0;k<count0+count1;k++){
//         arr[k] = 1;
//      }
//     for(let l=count0+count1;l<count0+count1+count2;l++){
//         arr[l] = 2;
//      }
//     return arr
// }

// const arr = [0,1,2,0,1,2,1,2,0,0,1]
// console.log(pattern(arr))

// Sort an array of 0's 1's & 2's
function pattern(arr){
    let low = 0;
    let mid = 0;
    let high =  arr.length - 1;
    while(mid<=high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--;
        }
    }
    return arr
}

const arr = [0,1,2,0,1,2,1,2,0,0,1]
console.log(pattern(arr))