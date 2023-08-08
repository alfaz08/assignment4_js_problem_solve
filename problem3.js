function sortMaker(arr) {
 if(arr[0]<0 || arr[1]<0){
  return "Invalid Input"
 }
 else{
  let temp=0;
  if(arr[0]>arr[1]){
    return arr;
  }
  else if(arr[0]==arr[1]){
    return "equal";
  }
  else{
   temp=arr[0];
   arr[0]=arr[1];
   arr[1]=temp;
   return arr;
  }
 }

}
const arr=[4,-2];
console.log(sortMaker(arr))