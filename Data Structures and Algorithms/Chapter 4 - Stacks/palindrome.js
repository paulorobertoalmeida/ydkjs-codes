// Palindrome

function isPalindrome(word) {
    function Stack() {
      this.s = s;
      for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
      }
      let rword = "";
      while (s.length()> 0) {
        rword += s.pop();
      }
      if (word == rword) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  let word = "hello";
  if (isPalindrome(word)) {
    console.log(word + " is a Palindrome.");
  } else {
    console.log(word + " ...sorry! This is not a Palindrome.")
  }
  word = "racecar";
  if (isPalindrome(word)) {
    console.log(word + " is a Palindrome.");
  } else {
    console.log(word + " sorry! This is not a Palindrome.")
  }