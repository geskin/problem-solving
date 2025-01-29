// function to create a simple freq counter using a map
function createFreqCounter(num) {
    let frequencies = new Map();

    for (let val of num) {
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

// given 2 positive integers, returns true if the 2 numbers have the same frequency of digits
function sameFrequency(int1, int2) {
    let int1Freq = createFreqCounter(int1.toString());
    let int2Freq = createFreqCounter(int2.toString());

    for (let key of int1Freq.keys()) {
        if (!int2Freq.has(key) || int1Freq.get(key) !== int2Freq.get(key)) return false;
    }

    return true;
}
