import random


WIN_CASES = {
	"rock": "scissors",
	"paper": "rock",
	"scissors": "paper"
}


print("Welcome to Rock, Paper or Scissors!")
print("You can choose between rock, paper or scissors.")
print("Let's play against the computer.")

while True:
	options = list(WIN_CASES.keys())
	user_choice = int(input("What do you choose? (\"1\" for rock, \"2\" for paper or \"3\" for scissors): "))
	user_choice = options[user_choice - 1]
	computer_choice = random.choice(options)

	print("You chose", user_choice)
	print("Computer chose", computer_choice)

	if user_choice == computer_choice:
		print("It's a tie!")
	elif WIN_CASES[user_choice] == computer_choice:
		print("You won!")
		break
	else:
		print("You lost!")
		break

	print("Computer chose", computer_choice)
