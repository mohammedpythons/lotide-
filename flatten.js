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

//assertArraysEqual([1, 2, 3], [1, 2, 3])


function flutten(array) {
    let = res = []
    for (let item of array) {
        if (Array.isArray(item) === true) {
            for (let num of item) {
                res.push(num)
            }
        }else{
            res.push(item)
        }
    }
    return res
}

 console.log(flutten([1, 2, [3, 4], 5, [6]]))
