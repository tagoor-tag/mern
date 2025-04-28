function reverseString(sentence) {
    let words = [];
    let word = "";
    
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            words[words.length] = word;
            word = "";
        } else {
            word += sentence[i];
        }
    }

    let reversed = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i !== 0) reversed += " ";
    }

    return reversed;
}

console.log(reverseString("hello world ")); 