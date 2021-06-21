const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};



function tail(arr){
     arr.shift();
     let newarr = arr
   
  return newarr
};

let result = tail([1, 2, 3, 4])
console.log(assertEqual(result.length, [1,2,3,4]));
console.log(assertEqual(result[0], [1,2,3,4]))
console.log(assertEqual(result[1], [1,2,3,4]))