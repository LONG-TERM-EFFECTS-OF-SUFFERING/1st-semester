/**
 * Calculates the body mass index (BMI) given a person's weight and height.
 *
 * @param weight - The weight of the person in kilograms.
 * @param height - The height of the person in meters.
 * @returns The BMI (Body Mass Index) value is being returned.
 */

function BMI(weight, height) {
	return (weight / (height * height)).toFixed(2)
}

// Tests
// console.log(BMI(85, 1.66))
// console.log(BMI(53, 1.55))
// console.log(BMI(52, 1.8))
// console.log(BMI(90, 2.0))


/**
 * Classify a person's BMI into different weight categories.
 *
 * @param weight - The weight of the person in kilograms.
 * @param height - The height of the person in meters.
 * @returns a string that represents the classification of the BMI based on the weight and height
 * provided.
 */

function classifyBMI(weight, height) {
	if (BMI(weight, height) < 18.5) {
		return "Below average weight"
	} else if (BMI(weight, height) > 18.5 && BMI(weight, height) < 24) {
		return "Average weight"
	} else if (BMI(weight, height) > 25 && BMI(weight, height) < 29.9) {
		return "Over average weight"
	} else {
		return "Obesity"
	}
}

// Tests
// console.log(classifyBMI(85, 1.66))
// console.log(classifyBMI(53, 1.55))
// console.log(classifyBMI(52, 1.8))
// console.log(classifyBMI(90, 2.0))
