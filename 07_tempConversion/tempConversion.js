const convertToCelsius = function(tempInF) {
  let convertedC = (tempInF - 32) * (5/9);
  convertedC = Math.round(convertedC * 10) / 10;
  return convertedC;
};

const convertToFahrenheit = function(tempInC) {
  let convertedF = (tempInC * (9/5) + 32);
  convertedF = Math.round(convertedF * 10) / 10;
  return convertedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
