/**
 * Calculates the tetrational power of a number.
 *
 * @param x - The number of times the base number ("a") is raised to itself.
 * It determines the height of the tetration operation.
 * @param a - The base number for the tetration operation.
 * @returns The result of raising the number to the power of tetration(x - 1, a).
 */

function tetration(x, a) { // 4^3 = 3^(3^(3^3))
	if (x == 0) {
		return 1
	} else if (x > 0) {
		return Math.pow(a, tetration(x - 1, a))
	}
}

// Tests
// console.log(tetration(4, 2))
// console.log(tetration(30, 1))
// console.log(tetration(3, 3))
