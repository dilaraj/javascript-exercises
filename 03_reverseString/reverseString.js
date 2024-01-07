const reverseString = function(text) {
    const split = text.split("")
    const newArray = split.reverse();
    const newText = newArray.join("");

    return newText
};

// Do not edit below this line
module.exports = reverseString;
