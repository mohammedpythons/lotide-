const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};

function head(arr){
    let first;
    for (let i = 0; i < arr.length; i++) {
            first = arr[0]


    }
    return first;
}


console.log(assertEqual(head([5,6,7]), 5))
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));



// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));