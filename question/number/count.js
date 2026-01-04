// 	Count the number of digits in a number.

function count(num){
    let count = 0;
    num = num.toString();
    for(let i = 0;i<num.length;i++){
        count += 1
    }
    return count
}

console.log(count(321))