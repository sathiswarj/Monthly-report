// Find the longest word in a sentence.
function longestWord(str){
    let word = str.split(' ')
    let longWord=''
    for(let i=0;i<word.length;i++){
        if(word[i].length > longWord.length){
            longWord = word[i]
        }
    }
    return longWord
}

 console.log(longestWord("this is javascript"))