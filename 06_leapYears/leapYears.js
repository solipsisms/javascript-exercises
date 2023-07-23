const leapYears = function(year) {
    let isLeap = false; 
    if (!Number.isInteger(year) || year < 0) {
        return 'ERROR';
    } else {
        if (year%2 === 0) {
            isLeap = true;
        } 
        if (year%100 === 0) {
            if (year%400 === 0) {
                isLeap = true;
            } else {
                isLeap = false;
            }
        }
    }
    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
