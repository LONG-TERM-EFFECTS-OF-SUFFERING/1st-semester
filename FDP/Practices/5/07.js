/**
 * Returns the sum of two numbers using recursion.
 *
 * @param a - A int number.
 * @param b - A int number.
 * @returns the sum of the two input numbers, "a" and "b".
 */

function recursiveSum(a, b) {
	if (b == 0) {
		return a
	} else {
		return 1 + recursiveSum(a, b - 1)
	}
}

// Tests
// console.log(recursiveSum(3, 3))
// console.log(recursiveSum(1294, 374))
// console.log(recursiveSum(1111, 33))
// console.log(recursiveSum(5, 3))
