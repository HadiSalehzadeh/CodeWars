/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

const removeEveryOther = (arr) => {
  let newArr = []
  for(i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i])
  }
  return newArr
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))