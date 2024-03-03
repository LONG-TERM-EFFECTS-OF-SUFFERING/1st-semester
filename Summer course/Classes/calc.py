class InvalidOptionError(Exception):
	pass


print("Calc\n The options that this calculator has are:")

option = int(input(" 1. Sum \n 2. Subtraction \n 3. Multiplication \n 4. Division \n"))
stop = False

while not stop:
	try:
		option = int(option)
		validity = 0 < option and option < 5

		if validity:
			stop = True
		else:
			raise InvalidOptionError()

	except ValueError:
		print("Error: Invalid number")
	except InvalidOptionError:
		option = input("Error: Invalid option, write a valid option: ")


stop = False
number_1 = input("Write the first number: ")

while not stop:
	try:
		number_1 = float(number_1)
		stop = True
		stop_2 = False
		number_2 = input("Write the second number: ")

		while not stop_2:
			try:
				number2 = float(number_2)
				stop_2 = True

				if option == 1:
					print(number_1 + number_2)
				elif option == 2:
					print(number_1 - number_2)
				elif option == 3:
					print(number_1 * number_2)
				else:
					print(number_1 / number_2)
			except ValueError:
				number_2 = input("Error: Invalid second number, write a valid number: ")
	except ValueError:
		number_1 = input("Error: Invalid first number, write a valid number: ")
