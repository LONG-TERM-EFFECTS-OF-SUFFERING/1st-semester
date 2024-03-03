/**
 * Returns true if both "boolean1" and "boolean2" are false, and false otherwise.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns The negation of the logical AND operation between "boolean1"
 * and "boolean2".
 */

function noAND(boolean1, boolean2) {
	return !(boolean1 && boolean2)
}


/**
 * Returns true if either "boolean1" or "boolean2" is true.
 * Otherwise, it returns false.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns the result of the logical OR operation between "boolean1" and "boolean2".
 */

function OR(boolean1, boolean2) {
	return boolean1 || boolean2
}


/**
 * Returns true if the two input booleans are different, but at least one of them is
 * true. Otherwise, it returns false.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns the result of the logical XOR operation between "boolean1" and "boolean2".
 */

function XOR(boolean1, boolean2) {
	return noAND(boolean1, boolean2) && OR(boolean1, boolean2)
}


/**
 * Returns the result of a logical operation involving XOR and OR, taking four boolean values as input.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @param boolean3 - A boolean value.
 * @param boolean4 - A boolean value.
 * @returns the result of the logical AND operation between the result of the XOR operation between
 * "boolean1" and "boolean2", and the result of the logical OR operation between "boolean3 and boolean4".
 */

function myCircuit(boolean1, boolean2, boolean3, boolean4) {
	return XOR(boolean1, boolean2) && OR(boolean3, boolean4)
}

// Tests
// console.log(myCircuit(1, 1, 1, 1))
// console.log(myCircuit(1, 0, 1, 1))
