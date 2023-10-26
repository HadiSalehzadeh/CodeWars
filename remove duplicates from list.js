/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  let newArr = []
  a.forEach((ele) => {
    if(!newArr.includes(ele)){
      newArr.push(ele)
    }
  })
  return newArr
}


const noDuplicateInArr = (a) => {
  let newArr = [];

  for(i = 0; i < a.length; i++){
    if(!newArr.includes(a[i])){
      newArr.push(a[i])
    }
  }
  return newArr
}

console.log(distinct([1,2,3,4,5,5,6,7,7,8,8,8,8,9,9]))
console.log(noDuplicateInArr([1,2,3,4,5,5,6,7,7,8,8,8,8,9,9]))
