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

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect
    return eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`): console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  };

  console.log(assertObjectsEqual({a:3, b: 3},{a:3, b: 3} ))