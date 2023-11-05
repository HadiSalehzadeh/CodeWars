/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

const findAverage = (array) => (array.length <= 1) ? array : array.reduce((ele, sum) => ele + sum, 0) / array.length;

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))