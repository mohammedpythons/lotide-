const eqArrays = require("./eqArrays")

function assertArraysEqual(arr1, arr2) {
   
    return eqArrays(arr1, arr2) ? console.log("they are equal") : console.log("they are not equal")
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
