function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
