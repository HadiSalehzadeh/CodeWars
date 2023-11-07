/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
*/

function noBoringZeros(n) {
  let numberString = n.toString();
  let trimmedNumberString = numberString.replace(/0+$/, '');
  let trimmedNumber = trimmedNumberString === '' ? 0 : parseFloat(trimmedNumberString);
  return trimmedNumber;
}


console.log(noBoringZeros(1450) )
console.log(noBoringZeros(960000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))
console.log(noBoringZeros(-105))
console.log(noBoringZeros(0))