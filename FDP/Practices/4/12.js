/**
 * Calculates the area of a circle given its radius.
 *
 * @param r - The radius of the circle.
 * @returns the area of the circle with radius "r" rounded to 4 decimal places.
 */

function circleArea(r) {
	return (Math.pow(r, 2) * Math.PI).toFixed(4)
}


/**
 * Calculates the area of the land between two concentric circles.
 *
 * @param r2 - The radius of the larger circle.
 * @param r1 - The radius of the smaller circle.
 * @returns the difference between the areas of the two circles.
 */

function landArea(r2, r1) {
	return circleArea(r2) - circleArea(r1)
}

// Tests
// console.log(circleArea(19))
// console.log(circleArea(16))
// console.log(landArea(19, 16))
