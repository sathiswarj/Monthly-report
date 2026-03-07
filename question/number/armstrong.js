// An Armstrong number (or narcissistic number) is a number that equals the sum of its own digits, each raised to the power of the total number of digits. 
// For example, \(153\) is a 3-digit Armstrong number because \(1^{3}+5^{3}+3^{3}=1+125+27=153\)

function armstrong(num){
     let sum = 0
    let temp = num

    while(temp > 0){
       let digit =  temp % 10
        sum += digit * digit * digit
        temp = Math.floor(temp / 10)
    }
    return sum === num
}


console.log(armstrong(153)); // true
console.log(armstrong(123)); // false   