const user = "frifayer"
const password = "frifayer"
let balance = 2000


/**
 * Checks if the provided user and password match the expected values.
 *
 * @param user_ - The username entered by the user for validation.
 * @param password_ - The password that the user enters for validation.
 * @returns a boolean value indicating whether the provided user and password match the expected user
 * and password.
 */

function validation(user_, password_) {
	return user_ == user && password_ == password
}


/**
 * Prompts the user for their username and password and then calls the validation
 * function.
 *
 * @returns the result of the validation function.
 */

function login() {
	const user = prompt("Write your user: ")
	const password = prompt("Write your password: ")
	return validation(user, password)
}

/**
 * Checks if the requested withdrawal amount is greater than the available
 * balance and updates the balance accordingly.
 *
 * @param value - The amount of money that the user wants to withdraw
 * from their account.
 */

function withdraw(value) {
	if (value > balance) {
		console.log("The amount you wish to withdraw is greater than that available, remember that your balance is: ", balance)
	} else {
		balance -= value
		console.log("Withdrawal made successfully, now your balance is: ", balance)
	}
}


/**
 * Takes a value as input and adds it to the balance, displaying the updated
 * balance if the value is valid.
 *
 * @param value - The amount of money that the user wants to deposit
 * into their account.
 */

function deposit(value) {
	if (value <= 0) {
		console.log("The input value is not valid")
	} else {
		balance += value
		console.log("The deposit was made successfully, now your balance is: ", balance)
	}
}


/**
 * Takes an option as input and performs either a withdrawal or a deposit based
 * on the option chosen.
 *
 * @param option - Is used to determine which action to perform. If option is 1, it will prompt the
 * user to enter the amount to withdraw and call the withdraw function. If option is 2, it
 * will prompt the user to enter the amount to deposit and call the deposit function.
 * @returns the result of either the withdraw or deposit function or an error message, depending
 * on the option chosen.
 */

function action(option) {
	if (option == 1) {
		const value = +prompt("Enter the amount to withdraw: ")
		return withdraw(value)
	} else if (option == 2) {
		const value = +prompt("Enter the amount to deposit: ")
		return deposit(value)
	} else {
		console.log("The input option is not valid")
	}
}


/**
 * Prompts the user to login and then prompts for an action (withdraw or deposit)
 * based on the login status.
 */

function menu() {
	if (login()) {
		const option = prompt("Write the action (1. withdraw 2. deposit): ")
		action(option)
	} else {
		console.log("Invalid user or password")
	}
}

menu()
