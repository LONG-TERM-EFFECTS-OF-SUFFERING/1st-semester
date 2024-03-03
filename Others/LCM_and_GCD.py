def least_common_multiple(min_number, max_number):
	number = max_number

	while number % max_number != 0 or number % min_number != 0:
		number += 1

	return number

print(least_common_multiple(24, 36))


def greatest_common_divisor(min_number, max_number):
	number = min_number

	while max_number % number != 0 or min_number % number != 0:
		number -= 1

	return number

print(greatest_common_divisor(24, 36))
