/*
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
*/

function flickSwitch(arr) {
    let valueToReturn = true

    return arr.map((element) => {
        if(element === 'flick') {
            valueToReturn = !valueToReturn
        }
        return valueToReturn
    })
}