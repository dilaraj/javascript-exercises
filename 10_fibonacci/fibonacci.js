const fibonacci = function(num) {
    let fibonacci = [1, 1];
    let i = fibonacci.length; // Length of array

    if (num == 0) {
        return 0;
    } 
    else if (num < 0) {
        return 'OOPS';
    } 

    for (let j = i; j < num; j++) {
        let latest = fibonacci[j-2] + fibonacci[j-1];
        fibonacci.push(latest);
    }

    return fibonacci[num-1];


};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
