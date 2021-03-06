
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function accessElementInArray(array, index) {
    return array[index];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromBeginningOfArray(array) {
    return array.slice(1, array.length);
}
function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
}

var chocolateBars = new Array();
chocolateBars.push('snickers');
chocolateBars.push('hundred grand');
chocolateBars.push('kitkat');
chocolateBars.push('skittles');

console.log(chocolateBars);
