function longestWord(sentence){
    let word = "", longest = "";
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i] === "" || i == sentence.length){
            if(word.length > longest.length){
                longest = word;
            }
        }else{
            word += sentence[i];
        }
        
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog")); 