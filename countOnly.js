  
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
         return `Assertion Passed: ${actual} === ${expected}`
    } else {
        return `Assertion Failed: ${actual} !== ${expected}`
    }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    let results = {};
    
    for (let item of allItems) {
        
            if (itemsToCount[item] === true) {
                if (results[item]) {
                    results[item]++;

                }else {
                   
                  results[item] = 1


                }

            
        }
    }

    return results;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1)


  console.log(assertEqual(result1["Jason"], 1));
  console.log(assertEqual(result1["Karima"], undefined));
  console.log(assertEqual(result1["Fang"], 2));
  assertEqual(result1["Agouhanna"], undefined);