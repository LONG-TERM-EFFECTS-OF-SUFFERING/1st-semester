import random, string


def password_generator():
	characters = string.ascii_lowercase + string.digits + string.punctuation + string.ascii_uppercase

	password = []

	while (len(password) < 16):
		character = random.choice(characters)
		password.append(character)

	password = "".join(password)
	return "Your password is: " + password

print(password_generator())
