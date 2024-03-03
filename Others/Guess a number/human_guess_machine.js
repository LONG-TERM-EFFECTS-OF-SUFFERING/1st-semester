let user = 0
const number = 35
let attempts = 5

console.log("Guess a number between 1 and 100")

while (user != number) {
	user = prompt("What's the number? ")
	if (attempts == 0) {
		console.log("You've lost, the number was: ", number)
		break
	} else if (user > number) {
		attempts = attempts - 1
		console.log("You passed, you have ", attempts, " attempts left")
	} else if (user < number) {
		attempts = attempts - 1
		console.log("You lack, you have ", attempts, " attempts left")
	} else if (user == number && attempts != 0) {
		console.log("You got it right")
	}
}
