function reverseSentence(str){
    let string = str.split(' ')
    let reversedSentence = ''
    for(let i=string.length - 1;i>=0;i--){
        reversedSentence  += string[i] + ' '
    }
    return reversedSentence
}

console.log(reverseSentence("this is blue"))