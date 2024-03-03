decoration = "----------------------------------"


FOODS = [
	"ENTRY",
	"PRINCIPAL MEAL",
	"DESSERT"
]


def data_entry(clients):
	all_ratings = []

	for i in range(clients):
		ratings = []

		for j in range(3):
			rating = int(input(f"{i + 1} Client, rate the food {FOODS[j]}: "))
			ratings.append(rating)
		all_ratings.append(ratings)

		print(decoration)
	return all_ratings


def foods_averages(all_ratings):
	averages = [0, 0, 0]

	for i in range(3):
		my_sum = 0

		for rating in all_ratings:
			my_sum += rating[i]

		averages[i] = my_sum / 5
	return averages

# ------------------------------------- - ------------------------------------ #

print("***** Survey on the menu of the day *****\n")
print("Ratings are integer values between 1 and 5")
print(decoration)
ratings_totales = data_entry(5)

for i, food_rating in enumerate(foods_averages(ratings_totales)):
	if food_rating < 3.5:
		print(f"Average of {FOODS[i]}: {food_rating}. It is recommended to remove from the menu")
	else:
		print(f"Average of {FOODS[i]}: {food_rating}. It is recommended to keep on the menu")
