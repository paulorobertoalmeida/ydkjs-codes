
function solution(string) {
    let newString = '';
    for (letter of string) {
      if (letter == letter.toUpperCase()){
        newString += ' ';
        newString += letter;
      } else {
        newString += letter;
      }
    }
    return  newString;
      
  }
  