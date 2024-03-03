/**
 * Determines if a given number is even or not using recursion.
 *
 * @param number - A int number.
 * @returns "true" if the input "number" is even, and "false" if it is odd.
 */

function recursiveIsEven(number) {
	if (number == 1) {
		return false
	} else if (number == 2) {
		return true
	} else if (number < 0) {
		return recursiveIsEven(-number)
	} else {
		return recursiveIsEven(number - 2)
	}
}

// Tests
// console.log(recursiveIsEven(2))
// console.log(recursiveIsEven(98))
// console.log(recursiveIsEven(111))
// console.log(recursiveIsEven(43))
