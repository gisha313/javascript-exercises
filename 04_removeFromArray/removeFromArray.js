const removeFromArray = function(arr, ...values) {
    let new_arr = []
    for (element of arr)
        if (!values.includes(element))
            new_arr.push(element)
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
