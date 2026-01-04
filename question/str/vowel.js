// Count the number of vowels in a string.

// function vowel(str){
//     let count = 0
//     let vowels = "aeiou";
//     for(let i = 0;i<str.length;i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count
// }

// console.log(vowel("laptop"))

// ========================================================


// Find the freq of vowels in a string.


function vowel(str){
    let freq = {}
    let vowels = "aeiou";
    for(let i = 0;i<str.length;i++){
        let char = str[i]
        if(vowels.includes(char.toLowerCase())){
            freq[char] = (freq[char] || 0) + 1
        }
    }
    return freq
}

console.log(vowel("laptop"))


// ==========================================================================================

//Count the vowels

function countVow(str){
    let count = 0;
    let vowels=['a','e','i','o','u']

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(countVow("javascript"))

