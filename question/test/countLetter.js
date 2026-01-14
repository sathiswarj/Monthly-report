// Count total characters (excluding spaces)

function countLetter(str){
    let count = 0;
    const string = str.split('')

    for(let i=0;i<string.length;i++){
        if(str[i] !== ' '){
            count++;
        }
    }
    return count
}

console.log(countLetter("java script script"))