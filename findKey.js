// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};


const findKey = function(object, calback) {
    let str;
    for (key in object) {
        
        
        if (calback(object[key])) {
            str = key
            break;
        }
    }
    return str;
}




let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"
  console.log(result)