/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.
*/
function reverseList(list) {
    let newList = []
    list.forEach((ele) => {
      newList.unshift(ele);
    })
    return newList
}