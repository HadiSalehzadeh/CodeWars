/*
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
*/
function cutIt(arr) {
  let shortestLen = arr[0].length
  for(i = 0; i < arr.length; i++){
    if(arr[i].length < shortestLen){
        shortestLen = arr[i].length
    }
  }

  let shortenArr = []
  for(i = 0; i < arr.length; i++){
    let shortElement = arr[i].slice(0,shortestLen)
    shortenArr.push(shortElement)
  }
  return shortenArr
}
//Test case
console.log(cutIt(['a', 'bc', 'def', 'ghij']))