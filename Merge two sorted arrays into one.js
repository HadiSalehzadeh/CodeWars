/* 
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
*/

function mergeArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = Array.from(new Set(mergedArray)).sort((a, b) => a - b);
    return sortedArray;
}