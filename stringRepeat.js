/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

const repeatStr = (n, str) => {
    let result = ''
    for(i = 0; i < n; i++){
        result += str
    }
    return result
}


console.log(repeatStr(3, 'ha '))