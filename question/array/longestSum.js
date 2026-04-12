function pattern(arr,k){
    let length = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j]
             if( sum === k){
            length = Math.max(length,j-i+1)
        }
        }
       
    }
    return length;
}

console.log(pattern([1,2,3,1,1,2,1,2,5],5))