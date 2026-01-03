// Remove duplicates from an array.

function removeDuplicate(arr){
    let result = [arr[0]]

    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i])
        }
    }
    return result

}

const arr = [1,1,5,5,8,12,12]
console.log(removeDuplicate(arr))