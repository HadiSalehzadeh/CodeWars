// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:
// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]
// Notice that the last element is always included. All numbers will be greater than 0.

function solve(arr) {
  let dominantElements = [];
  let maxElement = arr[arr.length - 1]; // Initialize the maximum element as the last element in the array
  dominantElements.push(maxElement); // Include the last element in the list of dominant elements

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= maxElement) {
      maxElement = arr[i]; // Update the maximum element encountered
      dominantElements.unshift(arr[i]); // Add the dominant element to the beginning of the list
    }
  }

  return dominantElements;
}


console.log(solve([92,52,93,31,89,87,77,105]))