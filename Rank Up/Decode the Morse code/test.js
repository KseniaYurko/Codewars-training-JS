
morseCode = ['.... . -.--   .--- ..- -.. .', '   .... . -.--   ', '...---...'];
decodeMorseCode = ['HEY JUDE', 'HEY', 'SOS'];

describe("Decode Morse", function(){

    it (`${morseCode[0]} =>  ${decodeMorseCode[0]}`, function() {
            assert.equal(decodeMorse(morseCode[0]), decodeMorseCode[0]);
    });

    it (`${morseCode[1]} =>  ${decodeMorseCode[1]}`, function() {
        assert.equal(decodeMorse(morseCode[1]), decodeMorseCode[1]);
    });

    it (`${morseCode[2]} =>  ${decodeMorseCode[2]}`, function() {
        assert.equal(decodeMorse(morseCode[2]), decodeMorseCode[2]);
    });
});