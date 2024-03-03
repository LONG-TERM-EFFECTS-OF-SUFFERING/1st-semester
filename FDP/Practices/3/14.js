/**
 * Checks if a given equation ax = b has a solution.
 *
 * @param a - The coefficient of the variable x in the equation ax = b.
 * @param b - The value on the right side of the equation ax = b. It is
 * the constant term in the equation.
 * @returns a boolean value. It returns true if the equation ax = b has a solution, and false
 * otherwise.
 */

function equationSolution(a, b) {
	if (a != 0) {
		return true
	} else if (a == 0 && b == 0) {
		return true
	} else {
		return false
	}
}

// Tests
// console.log(equationSolution(31, -11))
// console.log(equationSolution(0, 79))
// console.log(equationSolution(0, 0))
