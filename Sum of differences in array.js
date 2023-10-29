/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
*/

function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  } else {
    let sortedArr = arr.sort((a, b) => b - a);
    let difSum = 0;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      difSum += sortedArr[i] - sortedArr[i + 1];
    }
    return difSum;
  }
}

