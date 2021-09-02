// Multiple Base Conversions


function mulBase(num, base) {
    function Stack(){
      this.s = s;
      do {
        s.push(num % base);
        num = Math.floor(num /= base);
      } while (num > 0);
      let converted = "";
      while (s.length() > 0) {
        converted += s.pop();
      }
      return converted;
    }
  }
  
  let num = 31;
  let base = 2;
  let newNum = mulBase(num, base);
  console.log(num + " converted to base " + base + " is " + newNum);
  num = 125;
  base = 8;
  //let newNum = mulBase(num, base);
  console.log(num + " converted to base " + base + " is " + newNum);

  /* 
  
31 converted to base 2 is undefined
125 converted to base 8 is undefined

*/