function matchFinder(string1, string2) {
  if(typeof string1 !=="string"||typeof string2 !== "string"){
    return "please provide a string";
  }
 else{
  if(string1.includes(string2)){
    return true;
  }
  else{
    return false
  }
 }
}

const string1 ="Peter Parker";
const string2 = "pet";
console.log(matchFinder(string1,string2))