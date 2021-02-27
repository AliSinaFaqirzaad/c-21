//argumentsv are passed inside the ( ) of function
//arguments are the input you take in the code
// or arguments could be defined as something replaced by actual values
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
  }
  else {
    return false;
  }
  }
  //false : no
  //true : yes
  //boolean values: true/false
  