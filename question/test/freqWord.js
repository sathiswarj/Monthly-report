// Count frequency of each character

function freqChar(str) {
    let freq = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}

console.log(freqChar("javascript"))