function capitalizeNames(arr){
  
  return arr.map(el => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase());

}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
