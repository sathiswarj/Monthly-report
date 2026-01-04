// Capitalize First Letter of Each Word

function capitalizeLetter(str){
    let word = str.split(' ')
    let sentence = '';
    for(let i=0;i<word.length;i++){
        sentence += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
        if(i < word.length - 1){
            sentence += ' '
        }
    }
    return sentence
}

console.log(capitalizeLetter('this is javascript'))