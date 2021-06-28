const eqArrays = require("./eqArrays")

function assertArraysEqual(arr1, arr2) {
   
    return eqArrays(arr1, arr2) ? console.log("they are equal") : console.log("they are not equal")
}


// i removed the test code here because i'm using this code in the middle file, and the test code is in asserArraysEqualTest.js

module.exports = assertArraysEqual
