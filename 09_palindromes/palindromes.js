const palindromes = function (obj) {
    // Remove punctuation and turn lowercase
    let stripped = obj.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    //Remove spaces
    let spaced = stripped.replace(/\s/g, '');
    // Reverse the string
    let reversed = spaced.split("").reverse().join("");

    // boolean
    if(reversed === spaced) { 
        return true;
    } 
    else {
        return false;
    }

};

console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;
