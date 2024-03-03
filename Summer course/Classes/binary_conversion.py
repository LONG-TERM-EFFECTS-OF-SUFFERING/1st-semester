def to_binary(number):
	binary = []

	while number > 0:
		binary.append(number % 2)
		number = number // 2

	binary.reverse()

	return "".join(binary)

print(to_binary(22))


def to_decimal(number):
	number = list(number)
	number.reverse()
	decimal = 0

	for power, digit in enumerate(number):
		decimal = decimal + int(digit) * (2 ** power)

	return decimal

print(to_decimal(to_binary(22)))
