
function sum(numArray){
  var sumNum=0;
  for(i=0;i < numArray.length;i++){
  	 sumNum=sumNum+numArray[i];
    	
  }

  return sumNum;
}

var sumNumber=sum([1,2,3,4,5,6,7,8,9,10]);
console.log(sumNumber);