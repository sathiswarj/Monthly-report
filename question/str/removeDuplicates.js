// Remove Duplicate Characters from String

// function removeDuplicate(str){
//     let word = str.split('')
//     let ans = '';

//     for(let i=0;i<word.length;i++){
//         if(word[i] !== word[i-1]){
//             ans += word[i]
//         }
//     }
//     return ans
//  }

// console.log(removeDuplicate('aabbc'))


function removeDuplicate(str){
    let word = str.split('')
    let ans = '';

    for(let i=0;i<word.length;i++){
        if(!ans.includes(word[i])){
            ans += word[i]
        }
    }
    return ans
 }

console.log(removeDuplicate('programming'))