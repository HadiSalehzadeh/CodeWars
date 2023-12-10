/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

const doubleChar = str => {
  let newStr = ''
  for (i = 0; i < str.length; i++) {
    newStr += str[i].repeat(2)
  }
  return newStr
}
