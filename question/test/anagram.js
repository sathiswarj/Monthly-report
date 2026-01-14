// Check if two strings are anagrams

function anagram(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    if(str1.length !== str2.length){
        return false
    }
    let freq = {}

    for(let i=0;i<str1.length;i++){
        let char = str1[i]
           freq[char] = (freq[char] || 0) + 1
    }


    for(let i=0;i<str2.length;i++){
        let char = str2[i]
        if(!freq[char]){
          return false
        }
        else{
            freq[char]--;
        }
            return true
    }

}

console.log(anagram('silent', 'listen'))