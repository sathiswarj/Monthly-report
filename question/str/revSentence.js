// Reverse Words in a Sentence

function revWord(str){
    let word = str.split(' ')
    let revWords = ''
    for(let i=word.length - 1; i>=0;i--){
        revWords += word[i]
        if(i > 0){
            revWords += ' '
        }
    }
    return revWords;
}

console.log(revWord('this is javascript'))