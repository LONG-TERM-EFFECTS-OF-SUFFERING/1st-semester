/**
 * Calculates the sum of all numbers between the given start and end value.
 *
 * @param start - The starting number of the range for which we want to
 * calculate the sum.
 * @param end - The ending number of the range for which we want to
 * calculate the sum.
 * @returns the sum of all numbers from the start to the end (inclusive) if the start is smaller or
 * equal to the end. If the start is bigger than the end, it returns the string "The start is bigger
 * than the end".
 */

function sum(start, end) {
	if (start > end) {
		return "The start is bigger than the end"
	} else if (start == end) {
		return start
	} else {
		return end + sum(start, end - 1)
	}
}

// Tests
// console.log(sum(1, 4))
// console.log(sum(2, 4))
// console.log(sum(8, 9))
// console.log(sum(0, 100))
