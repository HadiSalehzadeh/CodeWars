/*Your task is simply to count the total number of lowercase letters in a string. */
const lowercaseCount = (str) => {
  let counter = 0
  for (i = 0; i < str.length; i++) {
    if(str[i] !== str[i].toUpperCase()) {
      counter++
    }
  }
  return counter
}

console.log(lowercaseCount("abc"))
console.log(lowercaseCount("abcABC123"))
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount(""))
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))