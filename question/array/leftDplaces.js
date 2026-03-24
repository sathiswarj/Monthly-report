// Left Rotate Array by K Places
function pattern(arr,k){
        let temp = []
        let n = arr.length
        k = k%n;
        for(let i=0;i<k;i++){
            temp.push(arr[i])
        }
        for(let j=k;j<n;j++){
            arr[j-k] = arr[j]
        }
        for(let l=n-k;l<n;l++){
            arr[l] = temp[l-(n-k)]
        }
        return arr
}
console.log(pattern([1,2,3,4,5],3))