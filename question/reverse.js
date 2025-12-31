// Reverse a number

function reverseNum(num){
    let arr =  num.toString().split('')
    let reversed = '';
    for(let i = arr.length - 1 ;i >= 0; i--){
        reversed += arr[i]
    }
    return Number(reversed)
}

console.log(reverseNum(321))

