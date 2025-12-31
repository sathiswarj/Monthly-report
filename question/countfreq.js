// Count the frequency of each character.

 function freqChar(str){
    let freq = {}
    let word =  str.toLowerCase();

    for(let i=0;i<word.length;i++){
        let char = word[i]
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
 }

 console.log(freqChar("Javascript"))