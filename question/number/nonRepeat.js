function nonRepeat(str){
    let arr =[]
    let freq = {}

    for(let i=0;i<str.length;i++){
        let char =str[i]
        if(!freq[char]){
            freq[char] = 1
        }
        else{
            freq[char] += 1
        }
    }

    for(let j=0;j<str.length;j++){
        let char = str[j]
        if(freq[char] === 1){
            arr.push(char)
        }
    }
    return arr
}

console.log(nonRepeat("aabbcdde"))