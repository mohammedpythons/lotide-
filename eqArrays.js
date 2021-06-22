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
    
    for (let j =0; j < arr2.length; j++) {
        if (arr1[j] === arr2[j]) {
            result = true;
        }else {
            result = false;
            return result;
        }
    }
    
    return result
}

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(assertEqual(eqArrays([1, 22, 3], [1, 2, 3]), true))