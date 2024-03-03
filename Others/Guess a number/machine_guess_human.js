let min = 70
let max = 100
let answer = ""


while (answer != "=") {
	const number = Math.round(Math.random() * (max - min) + min)
	answer = prompt("Is your number " + number + "? (>, <, =)")

	if (answer == ">") {
		min = number + 1
	} else if (answer == "<") {
		max = number - 1
	} else {
		console.log("I got it right!")
		break
	}
}
