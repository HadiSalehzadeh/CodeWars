// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


const array = (string) => {
  if (string.length <= 2) {
    return null;
  } else {
    string = string.substring(1); // remove the first character
    string = string.substring(0, string.length - 1); // remove the last character
    let newStr = string.split(", ");
    return newStr.join(" ");
  }
}



console.log(array('1, 2, 3, 4, 5'))