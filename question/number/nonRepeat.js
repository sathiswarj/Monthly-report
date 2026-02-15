function nonRepeat(str) {
    let freq = {};
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (!freq[char]) {
            freq[char] = 1
        } else {
            freq[char] += 1
        }

    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (freq[char] === 1) {
            arr.push(char)
        }
    }
    return arr;
}

console.log(nonRepeat("aabbcdde"))