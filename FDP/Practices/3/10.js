/**
 * Determines the quadrant in which a point (x,y) lies.
 *
 * @param x - The x-coordinate of a point on a Cartesian plane.
 * @param y - The y-coordinate of a point on a Cartesian plane.
 * @returns the quadrant in which the given coordinates (x,y) lie.
 */

function quadrant(x, y) {
	if (x > 0 && y > 0) {
		return "1 quadrant"
	} else if (x > 0 && y < 0) {
		return "4 quadrant"
	} else if (x < 0 && y < 0) {
		return "3 quadrant"
	} else if (x < 0 && y > 0) {
		return "2 quadrant"
	} else {
		return "That quadrant is NOT defined"
	}
}

// Tests
// console.log(quadrant(3, 4))
// console.log(quadrant(3, -2))
// console.log(quadrant(-2, 5))
// console.log(quadrant(-3, -3))
// console.log(quadrant(5, 1))
