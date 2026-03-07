// Left Rotate Array by One

// function pattern(arr){
//     let temp = arr[0]
//     for(let i=1;i<arr.length;i++){
//        arr[i-1] = arr[i]
//     }
//      arr[arr.length - 1] = temp
//     return arr
// }

// console.log(pattern([1,2,3,4,5]))

//Left Rotate Array by K Places

function pattern(num,k){
    let temp = []
    let n = num.length

    k = k%n

    for(let i=k;i<n;i++){
        temp.push(num[i])
    }
    for(let j=0;j<k;j++){
        temp.push(num[j])
    }
   console.log(temp);
}

 pattern([1,2,3,4,5], 2)

