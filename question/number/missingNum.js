// Find the missing number in an array of 1 to N.


function naturalNum(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== i+1){
            return i+1
        }
    }
    return arr.length+1;
}

const arr = [1, 2, 4, 5, 6];  
console.log(naturalNum(arr))