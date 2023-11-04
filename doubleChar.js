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

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("1337"))
console.log(doubleChar("illuminati"))
console.log(doubleChar("123456"))
console.log(doubleChar("%^&*("))