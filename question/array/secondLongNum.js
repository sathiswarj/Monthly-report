// function secondLong(arr){
//     var largest = arr[0]
//     var secondLargest = -1;
//     for(let i=0;i<arr.length;i++){
//         if(largest<arr[i]){
//             secondLargest =  largest
//             largest =  arr[i]
//         }
//         else if(arr[i]< largest && secondLargest < arr[i]){
//             secondLargest =  arr[i]
//         }
//     }
//     return secondLargest
// }

// const arr = [1,2,3,4,5]
// console.log(secondLong(arr))


// function longNum(arr1){
//     var largest = arr1[0]
//      for(let i=0;i<arr1.length;i++){
//         if(largest<arr1[i]){
//              largest =  arr1[i]
//         }

//     }
//     return largest
// }

// const arr1 = [1,2,3,4,5]
// console.log(longNum(arr1))


// function secondLargestNumber(arr) {
//     let largestNum = arr[0];
//     let secondLargestNum = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (largestNum < arr[i]) {
//             secondLargestNum = largestNum
//             largestNum = arr[i]
//         }
//         else if (arr[i] < largestNum && secondLargestNum < arr[i]) {
//             secondLargestNum = arr[i]
//         }
//     }
//     return secondLargestNum
// }


// const arr = [1, 2, 3, 4, 5]
// console.log(secondLargestNumber(arr))

// function palindrome(str){
//     let reversedStr = ''
//     for(let i=str.length-1;i>=0;i--){
//         reversedStr += str[i]
//     }
//     return str === reversedStr
// }

// const str = "madams"
// console.log(palindrome(str))


// function factorial(num){
//     for(let i=num-1;i>=1;i--){
//         num = num * i
//     }
//     return num
// }

// const num = 5
// console.log(factorial(num))

// function fibonacci(n){
//     let a = 0, b = 1, nextTerm;
//     let result = [];
//     for(let i=1;i<=n;i++){
//         result.push(a);
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }
//     return result;
// }
// const n = 7
// console.log(fibonacci(n))

function countVowels(str){
    let count = 0;
    let vowels="aeiou";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

const str = "Hello World"
console.log(countVowels(str))