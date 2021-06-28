const assertEqual = require('./assertEqual');



function tail(arr){
     
     let [one, ...tails] = arr
    
   
  return tails
};

let result = tail([1, 2, 3, 4])
console.log(assertEqual(result.length, 3));
console.log(assertEqual(result[0], 2))
console.log(assertEqual(result[1], 3))