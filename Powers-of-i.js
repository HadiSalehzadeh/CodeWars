// i is the imaginary unit, it is defined by 
// i²=−1, therefore it is a solution to 
// Your Task
// Complete the function pofi that returns i to the power of a given non-negative integer in its simplest form, as a string (answer may contain 

function pofi(n) {
  let remainder = n % 4;
  if (remainder === 0) {
    return '1';
  } else if (remainder === 1) {
    return 'i';
  } else if (remainder === 2) {
    return '-1';
  } else {
    return '-i';
  }
}
