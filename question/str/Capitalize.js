// Capitalize First Letter of Each Word
function capitalizeLetter(str){
    str = str.split(' ');
    let sentence = ''
    for(let i=0;i<str.length;i++){
        sentence += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
        if(i<str.length-1){
            sentence += ' '
        }    
    }
    return sentence
}

console.log(capitalizeLetter('this is javascript'))