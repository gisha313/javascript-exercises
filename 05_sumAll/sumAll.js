const sumAll = function(a, b) {
    let start = a < b ? a : b;
    let end = a > b ? a : b;
    if (typeof start !== 'number' || typeof end !== 'number')
        return 'ERROR';
    if (start % 1 !== 0 || end % 1 !== 0 || start < 0 ||  end < 0)
        return 'ERROR';
    
    return (end*(end+1)) / 2 - (start*(start-1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
