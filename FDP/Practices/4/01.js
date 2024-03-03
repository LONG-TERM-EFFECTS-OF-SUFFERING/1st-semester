/**
 * Returns the next state of a traffic light given an actual state.
 *
 * @param actualState - The actual state of the traffic light. It can be red, green or yellow.
 * @returns the next state of the traffic light based on the current state.
 */

function trafficLight(actualState) {
	if (actualState == "red") {
		return "green"
	} else if (actualState == "green") {
		return "yellow"
	} else if (actualState == "yellow") {
		return "red"
	} else {
		return "Invalid state"
	}
}

// Tests
// console.log(trafficLight("yellow"))
// console.log(trafficLight("red"))
// console.log(trafficLight("green"))
