const sumAll = function(firstInteger, secondInteger) {
    if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
        return 'ERROR';
    } else if (firstInteger < 0 || secondInteger < 0) {
        return 'ERROR';
    } else {
        let sum = 0;
        if (firstInteger < secondInteger) {
            for (let i = firstInteger; i <= secondInteger; i++) {
                sum += i;
            }
        } else {
            for (let i = secondInteger; i <= firstInteger; i++) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
