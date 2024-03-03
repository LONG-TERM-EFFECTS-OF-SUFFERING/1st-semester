/**
 * Returns the multiplication between two numbers using recursion.
 *
 * @param a - The number that you want to multiply.
 * @param b - The number of times the value "a" will be added to itself.
 * @returns the result of multiplying "a" and "b" recursively.
 */

function recursiveMultiplication(a, b) {
	if (b == 1) {
		return a
	} else {
		return a + recursiveMultiplication(a, b - 1)
	}
}

// Tests
// console.log(recursiveMultiplication(3, 4))
// console.log(recursiveMultiplication(102, 17))
// console.log(recursiveMultiplication(32, 114))
