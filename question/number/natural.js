// Find the sum of first N natural numbers.

function naturalNum(num){
    let sum =0;
   for(let i =1;i<=num;i++){
     sum += i
   }
   return sum
}

console.log(naturalNum(10))