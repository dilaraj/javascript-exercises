const place = 1;
const factor = Math.pow(10, place);

const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9)*factor)/factor;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32)*factor)/factor;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
