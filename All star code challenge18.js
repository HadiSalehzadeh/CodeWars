/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
*/

const strCount = (str, letter) => {
  let counter = 0
  for (i = 0; i < str.length; i++) {
    (letter === str[i]) ? counter++ : counter
  }
  return counter
}


console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('','z'))