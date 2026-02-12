function armstrong(num){
    let sum = 0;
    let temp = num;
    while(temp > 0){
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

console.log(armstrong(153)); // true
console.log(armstrong(123)); // false   