const assertEqual = require('./assertEqual');



function tail(arr){
     
     let [one, ...tails] = arr
    
    
   
  return tails
};

module.exports = tail