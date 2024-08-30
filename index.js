function isPalindrome(word) {
  // Iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    // Compare the letter we're iterating over to the corresponding letter at the end of the string
    if (word[startIndex] !== word[endIndex]) {
      // If the letters don't match, return false
      return false;
    }
  }
  // If we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Pseudocode:
  1. Loop through the string from the start to the middle:
     - For each index, get the corresponding index from the end.
  2. Compare the characters at these two indices.
  3. If any characters don't match, return false.
  4. If all characters match, return true.
*/

/*
  Explanation:
  The `isPalindrome` function checks if a string reads the same forwards and backwards. It does this by comparing characters from the start and end of the string, moving towards the center. If any characters don't match, it returns false. If all characters match, it confirms the string is a palindrome and returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
