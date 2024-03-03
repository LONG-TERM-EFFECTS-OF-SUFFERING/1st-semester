/**
 * Calculates the area of a circle given its radius.
 *
 * @param radius - The radius is the distance from the center of a circle to any point on its
 * circumference.
 * @returns the area of the circle with the given radius.
 */

function circleArea(radius) {
	return Math.PI * radius * radius
}

// Tests
// console.log(circleArea(20))
// console.log(circleArea(30))
// console.log(circleArea(40))


/**
 * Calculates the area of a rectangle given its length and height.
 *
 * @param length - The length of the rectangle.
 * @param height - The vertical measurement of the rectangle.
 * @returns the product of the length and height, which represents the area of the rectangle.
 */

function rectangleArea(length, height) {
	return length * height
}

// Tests
// console.log(rectangleArea(3, 4))
// console.log(rectangleArea(5, 8))
// console.log(rectangleArea(7, 9))


/**
 * Calculates the area of the terrain by subtracting half the area of the circle from the area
 * of the rectangle.
 *
 * @param side - The length of one side of the rectangle.
 * @param radius - The radius of the circle.
 * @returns the difference between the area of the rectangle and half the area of the circle.
 */

function terrainArea(side, radius) {
	diameter = 2 * radius

	return rectangleArea(diameter, side) - circleArea(radius) / 2
}

// Tests
// console.log(terrainArea(20, 10).toFixed(4))
// console.log(terrainArea(40, 40).toFixed(4))
// console.log(terrainArea(100, 60).toFixed(4))
