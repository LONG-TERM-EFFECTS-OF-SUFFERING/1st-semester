number = input("Write the number up to which you want to print the prime numbers: ")
stop = False

while not stop:
	try:
		number = int(number)

		if number < 1:
			raise ValueError

		stop = True
	except ValueError:
		number = input("Invalid number, write one valid: ")


primes = []

for i in range(2, number + 1): # Sieve of Eratosthenes implementation
	for prime in primes:
		if i % prime == 0:
			break
	else:
		primes.append(i)

print(primes)
