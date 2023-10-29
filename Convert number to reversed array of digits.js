/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/
const digitize = (n) => {
  let newArr = []
  let strNum = n.toString()
  for(i = 0; i < strNum.length; i++) {
    newArr.unshift(Number(strNum[i]))
  }
  return newArr
}

console.log(digitize(123));