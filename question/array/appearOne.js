// function pattern(arr) {
//     for (let i = 0; i < arr.length; i++) {
//             let count = 0;

//         let num = arr[i]
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === num) {
//                 count++;
//             }
//         }
//         if (count === 1) {
//             return num
//         }
//     }
// }

// console.log(pattern([1, 1, 2, 3, 3]))

function pattern(arr){
    let freq = {}
    for(let i=0;i<arr.length;i++){
        let num =  arr[i]
             freq[num] = (freq[num] || 0 ) + 1
    }

    for(let j=0;j<arr.length;j++){
          let num =  arr[j]
        if(freq[num] == 1){
            return num
        }
    }
}
 console.log(pattern([1, 1, 2, 3, 3]))