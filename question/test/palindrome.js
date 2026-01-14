// Check whether a string is a palindrome

function palindrome(str){
    let reveresdString = ''
    for(let i=str.length-1;i>=0;i--){
        reveresdString += str[i]
    }
    if(reveresdString === str){
        return true
    }else{
        return false
    }
}

console.log(palindrome("malaydalam"))