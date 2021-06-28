const eqArrays = require("./eqArrays")


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
console.log(assertEqual(eqArrays([1, 22, 3], [1, 2, 3]), true))