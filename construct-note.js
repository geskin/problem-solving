// function to create a simple freq counter using a map
function createFreqCounter(str) {
    let frequencies = new Map();

    for (let letter of str) {
        let letterCount = frequencies.get(letter) || 0;
        frequencies.set(letter, letterCount + 1);
    }
    return frequencies;
}


// accepts 2 strings: a message, and some letters
// returns true if the message can be built with the letters given, otherwise returns false

function constructNote(message, letters) {
    if (message.length > letters.length) return false;

    let messageFreqs = createFreqCounter(message);
    let lettersFreqs = createFreqCounter(letters);

    for (let key of messageFreqs.keys()) {
        if (!lettersFreqs.has(key) || lettersFreqs.get(key) < messageFreqs.get(key)) return false;
    }

    return true;
}
