const reverseString = function(string) {
    let stringInArray = [];
    for (let i = 0; i <= string.length; i++) {
        stringInArray.push(string[i]);
    }
    let stringInReverse = "";
    for (let j = (string.length - 1); j >= 0; j--) {
        stringInReverse += stringInArray[j];
    }
    return stringInReverse;
};

// Do not edit below this line
module.exports = reverseString;
