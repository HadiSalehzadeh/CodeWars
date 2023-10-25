/*
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
*/

function firstToLast(str,char){
    //1. apply indexof() on the string store it in a var
    let firstIndexVal = str.indexOf(char)
    //2. apply lastindexof() on the string store it in a var
    let lastIndexVal = str.lastIndexOf(char)
    //3. return the difference
    if(lastIndexVal < 0 || firstIndexVal < 0){
      return -1
    }else{
      return (lastIndexVal - firstIndexVal)
    }
}
  
  console.log(firstToLast("ababc","a")) // 2
  console.log(firstToLast("ababc","c")) // 0
  console.log(firstToLast("ababc","d")) // -1