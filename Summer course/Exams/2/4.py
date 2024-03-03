import random
import time

decoration = "----------------------------------"


DEPARTMENTS = [
	"Cauca",
	"Choco",
	"Nariño",
	"Putumayo",
	"Valle"
	]

MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June"
	]

rain_statistics = []

def initialize_rains():
	for i in range(len(DEPARTMENTS)):
		rains = []

		for j in range(len(MONTHS)):
			random_number = round(random.random() * 100, 1)
			rains.append(random_number)

		rain_statistics.append(rains)

def month_average(month):
	my_sum = 0

	for i in rain_statistics:
		my_suma += i[month]

	average = my_sum / len(DEPARTMENTS) # my_sum / 5

	return average

def department_average(department):
	my_sum = sum(rain_statistics[department])
	average = my_sum / len(MONTHS) # my_sum / 6

	return average

def menu(mode):
	if mode == 1:
		print("Write the department:")
		department = int("1.Cauca \n2.Choco \n3.Nariño \n4.Putumayo \n5.Valle \n") - 1

		print(f"The average for the department {DEPARTMENTS[department]} is {department_average(department)}")
	else:
		print("Write the month:")
		month = int("1.January \n2.February \n3.March \n4.April \n5.May \n6.June \n") - 1

		print(f"The average for the month {MONTHS[month]} is {month_average(month)}")

def fill_out():
	initialize_rains()
	print("Filling rain matrix...")
	time.sleep(2)
	print("Matrix filled")

def print_matriz():
	print("{:^13}".format(""), end = " ")
	for month in MONTHS:
		print("{:^10}".format(month), end =" ")
	print("\n")

	for i, department in enumerate(DEPARTMENTS):
		print("{:<10}".format(department), end = " ")
		for rain in rain_statistics[i]:
			print("{:>10.1f}".format(rain), end = " ")
		print("")

# ------------------------------------- - ------------------------------------ #

option = 0

while option != 5:
	print(decoration)

	print("Write an option:")
	print("1. Fill the matrix \n2. Print the matrix \n3. Average rains by department \n4. Average rains by month \n5. Leave")
	option = int(input())

	print(decoration)

	if option == 1:
		fill_out()
	elif option == 2:
		print_matriz()
	elif option == 3:
		menu(1)
	elif option == 4:
		menu(2)
