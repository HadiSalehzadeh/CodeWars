/*
Complete the solution so that it reverses the string passed into it.
*/
//Using split, reverse and join
const solution = (str) => str.split('').reverse().join('')

//Using loop
function strReversedwithloo (str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

//Using reduce
const strReversed = (str) => str.split('').reduce((reversed, char) => char + reversed, '')


console.log(strReversed('world'))
console.log(strReversed('hello'))
console.log(strReversed(''))
console.log(strReversed('h'))