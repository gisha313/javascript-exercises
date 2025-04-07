const palindromes = function (str) {
    const allowed = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    str = str.toLowerCase().split('').filter(char => allowed.includes(char)).join('');
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
