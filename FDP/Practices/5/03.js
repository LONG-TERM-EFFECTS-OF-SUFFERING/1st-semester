/**
 * Returns the sum of the squares of numbers obtained by squaring each number from the
 * start to the end, adding 7 to each square, and then squaring the result ((i^2 + 7)^2).
 *
 * @param start - The starting number of the range for which we want to
 * calculate the sum.
 * @param end - The ending number of the range for which we want to
 * calculate the sum.
 * @returns the sum of the squares of the numbers in the range from "start" to "end", where each number
 * is squared and then added to 7 before being squared again.
 */

function sum(start, end) {
	if (start > end) {
		return "The start is bigger than the end"
	} else if (start == end) {
		return Math.pow(end * end + 7, 2)
	} else {
		return Math.pow(start * start + 7, 2) + sum(start + 1, end)
	}
}

// Tests
// console.log(sum(1, 3))
// console.log(sum(2, 4))
// console.log(sum(8, 9))
// console.log(sum(0, 100))
