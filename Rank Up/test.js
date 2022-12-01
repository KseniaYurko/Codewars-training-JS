let wordsList = ["din", "recede", "Success", "(( @"];
let exepted = ["(((", "()()()", ")())())", "))(("];

describe("Duplicate Encoder", function(){
    function makeTest(word) {

        for (let i = 1; i <= wordsList.length; i++) { 

            it (`${word} => ${exepted}`, function(){
                assert.equal(duplicateEncode(wordsList[i]), exepted[i]);
                makeTest(wordsList[i]);
            })
        }
    }
})


  