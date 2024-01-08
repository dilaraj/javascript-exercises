const sumAll = function(min, max) {
    const inBetween = [];
    let total = 0;

    if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR';
    } 

    if (min < max) {
        for (var i = min; i <= max; i++) {
            inBetween.push(i);
        }
    } 
    else if (min > max) {
        for (var i = max; i <= min; i++) {
            inBetween.push(i);
        }
    }

    for (var i = 0; i < inBetween.length; i++) {
        total += inBetween[i];
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
