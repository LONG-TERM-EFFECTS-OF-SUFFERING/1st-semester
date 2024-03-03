'''
	Summary

	# Create a class
	class Class:

	# Use a class
	object = Class()

	# Define a constructor of a class
	def __init__(self, parameters):

	# Using an object's own variable
	object.variable

	# Define a method of a class
	def name(parameters):
'''

class Soldier: # Firs letter capitalized and CamelCase
	def __init__(self, name, race):
		self.name = name
		self.race = race

		if race == "Elf":
			self.life = 80
			self.speed = 10
			self.cost = 200
		elif race == "Human":
			self.life = 100
			self.speed = 7
			self.cost = 100
		elif race == "Dwarf":
			self.life = 120
			self.speed = 3
			self.cost = 180

	def set_weapon(self, weapon):
		self.weapon = weapon


army = []

# first_soldier = Soldier("Dwarf_1", "dwarf")
# print("Name of the first soldier: ", first_soldier.name)
# print("Race of the first soldier: ", first_soldier.race)
# print("Cost of the first soldier: ", first_soldier.cost)
# print("Speed of the first soldier: ", first_soldier.speed)
# print(type(first_soldier))

# first_soldier.set_weapon("Sword")
# print(first_soldier.weapon)


soldiers_number = int(input("How many soldiers do you want in your army?: "))
money = int(input("Write the money you have available for training: "))

for i in range(soldiers_number):
	if money > 0:
		i += 1
		soldier_name = input(f"#{i} soldier name: ")
		soldier_race = input(f"#{i} soldier race: ")
		soldier = Soldier(soldier_name, soldier_race)

		if money - soldier.cost < 0:
			print("Insufficient money")
			break

		army.append(soldier)
		money -= soldier.cost

print("Your training have finalized, remaining money: $", money)

print("ARMY")
for soldier in army:
	print(soldier.name)
