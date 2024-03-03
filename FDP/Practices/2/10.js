/**
 * Converts radians to degrees using a conversion factor.
 *
 * @param degrees - An angle in degrees.
 * @returns the value of degrees converted to radians.
 */

function radToDegrees(degrees) {
	return degrees * (Math.PI / 180)
}


/**
 * Calculates the apotema (distance from the center to the midpoint of a side) of
 * a regular polygon given the number of sides and the length of each side.
 *
 * @param sidesNumber - The number of sides of the polygon.
 * @param sidesLength - The length of each side of the polygon.
 * @returns the apotema (the distance from the center of a regular polygon to any of its sides) of the
 * polygon with the given number of sides and side length.
 */

function apotema(sidesNumber, sidesLength) {
	return sidesLength / (2 * Math.tan(radToDegrees(360 / (2 * sidesNumber))))
}


/**
 * Calculates the perimeter of a polygon given the number of sides and the length of each side.
 *
 * @param sidesNumber - The number of sides of the polygon.
 * @param sidesLength - The length of each side of the polygon.
 * @returns the perimeter of the polygon with the given number of sides and length of each side.
 */

function perimeter(sidesNumber, sidesLength) {
	return sidesNumber * sidesLength
}


/**
 * Calculates the area of a regular polygon given the length of its sides and the
 * number of sides.
 *
 * @param sidesLength - The length of each side of the regular polygon.
 * @param sidesNumber - The number of sides of the regular polygon.
 * @returns the area of the regular polygon with the given side length and number of sides.
 */

function regularPolygonArea(sidesLength, sidesNumber) {
	return (perimeter(sidesNumber, sidesLength) * apotema(sidesNumber, sidesLength)) / 2
}

// Tests
// console.log(regularPolygonArea(6, 5).toFixed(1))
// console.log(regularPolygonArea(5, 9).toFixed(1))
// console.log(regularPolygonArea(8, 6).toFixed(1))
