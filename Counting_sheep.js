// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// const countSheeps = (sheep) => {
//   let sheepCounter = 0
//   sheep.forEach(ele => {
//     if (ele) {
//       sheepCounter += 1
//     }   
//   })
//   return sheepCounter
// }

const countSheeps = (sheep) => {
  return sheep.reduce((totalSheep, currentSheep) => {
    if(currentSheep) {
      return totalSheep + 1
    } else {
      return totalSheep
    }
  }, 0)
}

console.log(countSheeps([undefined,null,false,true]))