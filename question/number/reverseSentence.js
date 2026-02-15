function reverseSentence(str) {
    let word = str.split(" ")
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i] + " ";
    }
    console.log(reversedWord);
}
reverseSentence("this is blue");