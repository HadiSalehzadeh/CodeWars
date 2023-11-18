// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {
  let str = ''
  for (i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
      str += s[i]
    }
  }
  return str
}

console.log(removeExclamationMarks('Hello!'))