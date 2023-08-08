function cubeNumber(number){
 if(typeof number !=="number"|| number<=0){
  return "Please provide a positive number";
 }
 else{
  const finalOutput= (number*number*number);
  return finalOutput
 }
}
let a =-3;
let output = cubeNumber(a);
console.log(output);