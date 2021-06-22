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

assertArraysEqual([1, 2, 3], [1, 2, 3])


function without(arr, itemsToRemove) {
    let newArr = []
    for (let item of arr) {
        if (!itemsToRemove.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr
}


console.log(without([1,2, 3, 4,5, "2"], [2,3]));
