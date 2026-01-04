// Find how many words are in a string.

function countWord(str){
    // split() helps to put parts of a string into an array.
    //breaks a string
    // puts each piece into an array
    str = str.trim().split(/\s+/) 
    //split(/\s+/) helps find words before and after spaces
    //Cut the string wherever there is a space and put each word into an array.
    let count = 0;
    for(let i=0;i<str.length;i++){
        count++;
    }
    return count
}

console.log(countWord("this is how it works"))