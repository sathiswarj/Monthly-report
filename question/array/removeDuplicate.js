function pattern(arr){
    let j = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }

    return arr.slice(0, j + 1);
}

const arr = [1,1,2,2,3,3,3];
console.log(pattern(arr)); 