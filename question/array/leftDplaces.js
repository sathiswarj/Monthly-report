// Left Rotate Array by K Places

function leftRotate(arr,k){
    let temp = []
    let n= arr.length;
    k = k % n;
    for(let i=0;i<k;i++){
        temp[i] = arr[i]
    }
    for(let i=k;i<n;i++){
        arr[i-k] = arr[i]
    }
    for(let j=n-k;j<n;j++){
        arr[j] = temp[j-(n-k)]
    }
    return arr;
}

console.log(leftRotate([1,2,3,4,5],3))