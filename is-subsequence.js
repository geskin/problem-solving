// takes 2 strings and checks whether the characters in the first string 
// form a subsequence of the characters in the second string
// checks if the characters in the first string appear somewhere in the second without their order changing

function isSubsequence(str1, str2) {
    if (str2.length < str1.length) return false;

    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        } else {
            j++;
        }
    }

    return false;
}

