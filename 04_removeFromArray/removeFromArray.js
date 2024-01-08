const removeFromArray = function(array, ...args) {
    array = array.filter((el) => !args.includes(el));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
