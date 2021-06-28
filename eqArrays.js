const assertEqual = require('./assertEqual');

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

// i moved this code test to eqArraysTest.js file because i used this function in assertArraysEqual.js

module.exports = eqArrays