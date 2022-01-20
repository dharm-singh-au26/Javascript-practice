/*
 Ask a string input from the user, and display a message if the string entered is 
palindrome or not.
Ex: “aibohphobia” when reversed is still “aibohphobia”

*/

function checkPalindrome(str) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = checkPalindrome(string);

console.log(value);
