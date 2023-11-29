// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
  let newStr = ''
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i].toLowerCase()
  }
  let arr = newStr.split(" ")
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
  }
  return newArr.join(" ")
}

console.log(reverseMessage('This is an example of a Reversed Message!'))