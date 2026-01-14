// Remove duplicate characters from a string

function removeDuplicate(str){
    let char = ''
    for(let i=0;i<str.length;i++){
        if(!char.includes(str[i])){
            char += str[i]
        }
    }
    return char
}

console.log(removeDuplicate('javascriptsaj'))