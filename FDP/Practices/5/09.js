/**
 * Returns the sum of all odd numbers between a given start and end value.
 *
 * @param start - The starting number of the range for which we want to find the sum of odd numbers.
 * @param end - The ending number of the range for which we want to calculate the sum of odd numbers.
 * @returns the sum of all odd numbers between the start and end values.
 */

function oddSum(start, end) {
	if (start > end) {
		return 0
	} else if (start % 2 != 0) {
		return start + oddSum(start + 1, end)
	} else {
		return oddSum(start + 1, end)
	}
}

// Tests
// console.log(oddSum(1, 11))
// console.log(oddSum(3, 8))
// console.log(oddSum(12, 12))
// console.log(oddSum(10, 11))
