// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};

function countLetters(str) {
    let res = {}

    
    for (let letter of str) {
        if (letter === " ") {
            continue;
        }
        
        if (res[letter]) {
            res[letter]++
        }
        else{
            res[letter] = 1
        }
    }
    return res;
}

console.log(countLetters("lighthouse in the house"))