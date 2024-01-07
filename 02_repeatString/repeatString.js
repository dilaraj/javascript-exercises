const repeatString = function(text, num) {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += text;
    }

    if (num < 0) {
        output = "ERROR";
    }
    
    return output;
};

// Do not edit below this line
module.exports = repeatString;
