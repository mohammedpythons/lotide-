 //FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};


function eqArrays(arr1, arr2) {
    let result;
    arr1.forEach(elm => {
        for (let arr of arr2) {
            if (elm === arr) {
                result = true
            }else {
                result = false
            }
        }

    })
    return result
}


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))