const person1 = { name: "Diana", year: 18 }
const person2 = { name: "Camilo", year: 15 }
const person3 = { name: "Andres", year: 35 }
const person4 = { name: "Ophra", year: 18 }


/**
 * Compares the ages of two people and returns the name of the older person.
 *
 * @param person1 - A person object.
 * @param person2 - A person object.
 * @returns the name of the older person.
 */

function olderPerson(person1, person2) {
	if (person1.year > person2.year) {
		return person1.name
	} else if (person1.year < person2.year) {
		return person2.name
	} else {
		return "They are the same age"
	}
}

// Tests
// console.log(olderPerson(person1, person2) == "Diana")
// console.log(olderPerson(person2, person3) == "Camilo")
// console.log(olderPerson(person1, person4) == "They are the same age")
