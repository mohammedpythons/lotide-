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


function assertArraysEqual(arr1, arr2) {
   
    return eqArrays(arr1, arr2) ? console.log("they are equal") : console.log("they are not equal")
}







const letterPositions = function(sentence) {
    const results = {};
    
   

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            continue;
        }
        if (results[sentence[i]]) {

            results[sentence[i]].push(i)
            
            
        }else {
            results[sentence[i]] = []
             results[sentence[i]].push(i)
        }
        
    }
    
    return results;
  };

  console.log(letterPositions("mohamed ali"))
