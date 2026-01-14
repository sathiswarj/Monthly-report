// Count the number of vowels in a string

function vowelCount(str){
    const vowels =["a","e","i","o","u"]
    const string = str.split('')
    let count = 0;
    for(let i=0;i<string.length;i++){
        if(vowels.includes(string[i])){
            count ++;
        }
    }
    return count
}

console.log(vowelCount("javascript"))