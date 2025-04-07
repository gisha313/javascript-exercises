const fibonacci = function(n) {
    let last = 1;
    let curr = 1;
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let index = 2;
    while (index < n){
        let temp = curr;
        curr = last + curr;
        last = temp;
        index++;
    }

    return curr
};

// Do not edit below this line
module.exports = fibonacci;
