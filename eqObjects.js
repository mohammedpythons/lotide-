// FUNCTION IMPLEMENTATION
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

function eqObjects(obj1, obj2) {
    const obj1Keys = Object.keys(obj1)//[a, b]
    const obj2Keys = Object.keys(obj2)


    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }

    for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
        return false

    }
    }
 return true
   
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ba2 = {a: "1", b: 2};
//eqObjects(ab, ba)
 console.log(eqObjects(ab, ba))
 console.log(eqObjects(ab, ba2))  // false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false