// Capitalize the first letter of each word

function capitalWord(word){
    let str = word.split(' ')
    let fullWord = ''
    for(let i=0;i<str.length;i++){
        fullWord += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
        if(i < fullWord.length - 1){
            fullWord += ' '
        }
    }
    return fullWord
}

console.log(capitalWord("this is"))