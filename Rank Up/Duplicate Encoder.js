function duplicateEncode(word){
  
    word = word.toLowerCase()
    let newWord = '';
    let dictionary = Array(word.length).fill(0);
    
    for (let i = 0; i < word.length; i++){
        for (let j = 0; j < word.length; j++){

            if (word[i] == word[j]) {
                dictionary[i] += 1;
            }
        }

        (dictionary[i] > 1) ? newWord = newWord.concat(')') : newWord = newWord.concat('(');
    } 

    return newWord;
}

let result  = duplicateEncode('Success');
console.log(`the word is: ${result}`);