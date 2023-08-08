function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
   return "please provide a valid array"
 }
 else{
  let totalTaka=0;
  for(let i=0;i<changeArray.length;i++){
    totalTaka = totalTaka+ changeArray[i];
  }
  if(totalTaka>totalDue){
    return true;
  }
  else{
    return false;
  }
 }
}
const changeArray =[1,5,5];
const totalDue=10;
console.log(canPay(changeArray,totalDue))