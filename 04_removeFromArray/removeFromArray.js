const removeFromArray = function(array, ...valuesToRemove) { //... is the rest parameter allowing multiple values to be taken in
    return array.filter((item) => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
