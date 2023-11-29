// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) => {
  let endingLen = ending.length, newStr = str.slice(str.length - endingLen)
  return newStr == ending ? true : false
}

console.log(solution('hello', 'jo'))