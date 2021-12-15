function spinWords(string){
  const stringArray = string.split(' ');
  let result = '';
  stringArray.map((str, i) => {
    if (str.length >= 5){
      stringArray[i] = str.split('').reverse().join('');
    } else {
      stringeArray[i] = str;
    }
  result = stringArray.join(' ');
  });
return result;
}

//Variant

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
