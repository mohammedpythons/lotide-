const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};

function findKeyByValue(obj, val) {
    let res;
    for (let key in obj) {
        if (val === obj[key]) {
            
            res = key
            break;

        }else {
            res = undefined
        }
      
    }
    return res;
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"))

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))