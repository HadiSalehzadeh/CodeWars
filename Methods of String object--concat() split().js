/* 
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces. */

function splitAndMerge(string, separator) {
    var words = string.split(" ");
    var arr =[];
    var res = []
    for(i=0;i<words.length;i++){
     arr.push(words[i].split("").join(separator));
    }
    res = arr.join(" ");
    return res;
}