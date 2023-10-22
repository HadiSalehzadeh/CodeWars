/* 
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
 */

function fiveLine(s){
    //coding here...
    s = s.trim()
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
}