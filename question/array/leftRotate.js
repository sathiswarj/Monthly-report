// Left Rotate Array by One

// function pattern(arr){
//     let temp = arr[0];
//     for(let i=1;i<arr.length;i++){
//        arr[i-1] = arr[i];
//     }
//     arr[arr.length - 1] = temp;
//     console.log(arr);
// }

// pattern([1,2,3,4,5])

//Left Rotate Array by K Places

function pattern(arr, k){
    let temp =[];
    let n = arr.length;

         k = k % n;
 
    for(let i=k;i<n;i++){
        temp.push(arr[i])
    }
    for(let j=0;j<k;j++){
        temp.push(arr[j])
    }
    console.log(temp);
}

pattern([1,2,3,4,5], 2)

