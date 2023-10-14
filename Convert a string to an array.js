/* 
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
*/

function stringToArray(string){
    let arr = [];
    let str = string.split(" ");
    arr.push(...str);
    return arr;
}

/* 
use the spread operator (...) to push the individual elements of the str array into the arr array.
*/