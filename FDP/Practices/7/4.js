const person1 = { lastName1: "Melo", lastName2: "Castillo" }
const person2 = { lastName1: "Gonzales", lastName2: "Pantoja" }
const person3 = { lastName1: "Caicedo", lastName2: "Castillo" }
const person4 = { lastName1: "Lopez", lastName2: "Cardenas" }


/**
 * Checks if two people are relatives based on the assumption that relatives share last
 * names.
 *
 * @param person1 - A person object.
 * @param person2 - A person object.
 * @returns a string that indicates whether the two persons are relatives or not.
 */

function areRelatives(person1, person2) {
	if (person1.lastName2 == person2.lastName2) {
		return "They are relatives"
	} else {
		return "They aren't relatives"
	}
}

// Tests
// console.log(areRelatives(person1, person3) == "They aren't relatives")
// console.log(areRelatives(person3, person4) == "No They are relatives")
