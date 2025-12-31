//  Check if two strings are anagrams (“listen”, “silent”).

// function anagram(str1,str2){
//     str1 = str1.replace(/\s+/g,'').toLowerCase(); //removes all spaces
//     str2 = str2.replace(/\s+/g,'').toLowerCase();

//     if(str1.length !== str2.length){
//         return false
//     }
//     let freq = {}
//     for(let char of str1){
//         freq[char] = (freq[char] || 0)+ 1
//     }
//     // freq = { l:1, i:1, s:1, t:1, e:1, n:1 }

//     for(let char of str2){
//         if(!freq[char]) return false;
//         freq[char] --;
//     }
//     return true
// }

// console.log(anagram("listen", "silent"))


// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.


function anagram(str1, str2) {
//Removes all spaces (and tabs, newlines) from the string.
// \s+ → one or more whitespace characters
// g → do it globally (for the whole string)
    str1 = str1.replace(/\s+/g, '').toLowerCase(); //removes all spaces
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false
    }
    let freq = {}
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i]
        if (freq[char]) {
            freq[char] += 1
        }
        else {
            freq[char] = 1
        }
    }
    // freq = { l:1, i:1, s:1, t:1, e:1, n:1 }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i]

        if (!freq[char]) {
            return false
        }
        else {
            freq[char]--
        }
        return true
    }
}

console.log(anagram("listen", "silents"))