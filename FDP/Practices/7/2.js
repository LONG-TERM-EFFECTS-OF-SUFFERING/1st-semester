const isOlder1 = { name: "Diana", year: 18 }
const isOlder2 = { name: "Camilo", year: 15 }
const isOlder3 = { name: "Andres", year: 35 }


/**
 * Checks if a person is older than 18 years old.
 *
 * @param person - A person object.
 * @returns a string that states whether the person is older or not.
 */

function isOlder(person) {
	if (person.year >= 18) {
		return person.name + " is older"
	} else {
		return person.name + " isn't older"
	}
}

// Tests
// console.log(isOlder(isOlder1) == "Diana is older")
// console.log(isOlder(isOlder2) == "Camilo isn't older")
// console.log(isOlder(isOlder3) == "Andres is older")
// console.log(isOlder(isOlder1) == "Diana isn't older")
