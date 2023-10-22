/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(a, b) {
    const mergedArray = [...new Set([...a, ...b])].sort((x, y) => x - y);
    return mergedArray;
}