/**
 * Calculates the nth number in the Lucas sequence.
 *
 * @param position - A int number.
 * @returns the nth number in the Lucas sequence.
 */

function lucas(position) {
	if (position < 0) {
		return "Invalid position"
	} else if (position == 0) {
		return 2
	} else if (position == 1) {
		return 1
	} else {
		return lucas(position - 1) + lucas(position - 2)
	}
}

// Tests
// console.log(lucas(5))
// console.log(lucas(32))
