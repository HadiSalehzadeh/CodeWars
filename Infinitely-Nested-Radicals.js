// Hello,
// I am Jomo Pipi
// and today we will be evaluating an expression like this:
// (there are an infinite number of radicals)
// for a given value x
// Simple!
// arguments passed in will be 1 or greater

function evaluateRadicals(x) {
  if (x < 1) {
    return x;
  } else {
    return Math.sqrt(evaluateRadicals(x - 1));
  }
}