const sumAll = function(startingNumber, endingNumber) {
  if((startingNumber < 0 || startingNumber.toString().split("").includes(".") || 
    typeof(startingNumber) === "string" || typeof(startingNumber) === "object") 
    || (endingNumber < 0 || endingNumber.toString().split("").includes(".") || 
    typeof(endingNumber) === "string") || typeof(endingNumber) === "object"){
      return "ERROR";
    }else if(startingNumber > endingNumber){
      let sum = 0;

      for(let i = startingNumber; i >= endingNumber; i--){
        sum += i;
      }

      return sum;
    }else{
      let sum = 0;

      for(let i = startingNumber; i <= endingNumber; i++){
        sum += i;
      }

      return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
