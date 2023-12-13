// ###Lucky number
// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
// Function will return true for lucky numbers and false for others.

function isLucky(n) {
  // Convert the number to a string, then split and map it to get the sum of its digits
  const sum = n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);

  // Check if the sum is 0 or a multiple of 9
  return sum === 0 || sum % 9 === 0;
}