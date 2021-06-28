const assertEqual = require('./assertEqual');

function head(arr){
    let first;
    for (let i = 0; i < arr.length; i++) {
            first = arr[0]


    }
    return first;
}


console.log(assertEqual(head([5,6,7]), 5))
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));



