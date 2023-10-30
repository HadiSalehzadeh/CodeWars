/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) {
    return [];
  }

  
  let positiveCount = 0;
  let negativeSum = 0;

  for(i = 0; i < input.length; i++) {
    (input[i] > 0) ? positiveCount++ : negativeSum += input[i]
  }

  return [positiveCount, negativeSum]
}
