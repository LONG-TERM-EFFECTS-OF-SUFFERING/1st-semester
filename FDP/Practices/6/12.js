const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Checks if the element taken as input is in the list taken as input.
 *
 * @param list - An array.
 * @param element - The value that we are checking if it exists in the list.
 * @returns a boolean value - true if the element is found in the list, and false if it is not found.
 */

function isInList(list, element) {
	if (first(list) == element) {
		return true
	} else if (isEmpty(list)) {
		return false
	} else {
		return isInList(rest(list), element)
	}
}


/**
 * Returns the index of an element in a list.
 *
 * @param list - An array.
 * @param element - The value that you want to search for in the list.
 * @returns the index of the element in the list.
 */

function lookupInList(list, element) {
	if (first(list) == element) {
		return 0
	} else {
		return 1 + lookupInList(rest(list), element)
	}
}


/**
 * Returns the index of an element in a list, or -1 if the element is not found.
 *
 * @param list - An array of elements.
 * @param element - The element that we want to find in the list.
 * @returns the index of the element in the list if it is present, otherwise it returns -1.
 */

function lookupx(list, element) {
	if (isInList(list, element)) {
		return lookupInList(list, element)
	} else {
		return -1
	}
}

// Tests
// console.log(lookupx([["3", 4], 5, 3, 4], 3))
// console.log(lookupx([1, 2, 3, 4], 3.5))
// console.log(lookupx(["a"], 1.1))
// console.log(lookupx([11, 25, 1, 6, 10], 6))
