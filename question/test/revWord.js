// Reverse words in a sentence

function revSentence(word){
    word = word.split(' ')
    let result =''
    for(let i=word.length -1;i>=0;i--){
        result += word[i] + " ";
    }
    return result
}

console.log(revSentence("this is it"))