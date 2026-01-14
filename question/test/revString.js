// Reverse a string

function revString(str){
    let reveresdString = ''
    for(let i=str.length - 1;i>=0;i--){
        reveresdString += str[i]
    }
    return reveresdString
}

console.log(revString("javascript"))