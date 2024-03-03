/**
 * Calculates the value of a mathematical sequence based on the inputs "a", "b", and "x".
 *
 * @param a - The first term in the sequence.
 * @param b - The value that will be added to the previous result in each
 * recursive call of the function.
 * @param x - The number of times the function will recursively call
 * itself.
 * @returns the value of "a" if "x" is equal to 1. Otherwise, it is recursively calling itself with the
 * parameters "a", "b", and "x - 1", and then adding "b" to the result.
 */

function gFunction(a, b, x) {
	if (x == 1) {
		return a
	} else {
		return gFunction(a, b, x - 1) + b
	}
}

// Tests
// console.log(gFunction(1, 2, 8))
// console.log(gFunction(1, 12, 9))
// console.log(gFunction(8, 5, 90))
