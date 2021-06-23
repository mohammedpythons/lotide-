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

function middle(arrOne) {
    let container = []
    if (arrOne.length === 2 || arrOne.length === 1) {
        return []
    }else if (arrOne.length % 2 === 0) {
        let val2 = Math.floor((arrOne.length -1) /2);
        container.push(arrOne[val2])
        let val1 = Math.floor((arrOne.length) /2)
        container.push(arrOne[val1])
    }else if (arrOne % 2 !== 0) {
        let val3 = Math.floor((arrOne.length -1) /2);
        container.push(arrOne[val3])
    }
    return container;
}
console.log(middle([3,5, 7,6, 8, 7, 8,9]))

