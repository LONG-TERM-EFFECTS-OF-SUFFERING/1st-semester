import time
from os import system


def clearConsole():
	_ = system('cls')


print("Timer\nUnits are converted if you exceeded 60 units")

stop = False
hours = input("Write the number of hours: ")

# 1st validation
while not stop:
	try:
		hours = int(hours)
		stop = True
		stop_2 = False
		minutes = input("Write the number of minutes: ")

		while not stop_2:
			try:
				minutes = int(minutes)
				stop_2 = True
				stop_3 = False
				seconds = input("Write the number of seconds: ")

				while not stop_3:
					try:
						seconds = int(seconds)
						stop_3 = True
					except ValueError:
						seconds = input("Error: Invalid seconds, write a valid amount: ")
			except ValueError:
				minutes = input("Error: Invalid minutes, write a valid amount: ")
	except ValueError:
		hours = input("Error: Invalid hours, write a valid amount: ")


# 2nd validation
hours_validity = hours >= 0
minutes_validity = minutes >= 0
seconds_validity = seconds >= 0

print("Verifying the entered data...")
print("Converting data...")
time.sleep(1)


# Units conversion
if seconds >= 60 or minutes >= 60:
	hours = hours + minutes // 60
	minutes = minutes % 60 + seconds // 60
	seconds = seconds % 60

if hours_validity and minutes_validity and seconds_validity:
	is_there_time = hours > 0 or minutes > 0 or seconds > 0

	while is_there_time:
		print("Timer\n")
		print("Hours: ", hours, " Minutes: ", minutes, " Seconds: ", seconds)

		if minutes == 0:
			if hours != 0:
				hours = hours - 1
				minutes = 60
		if seconds == 0:
			if minutes != 0:
				minutes = minutes -1
				seconds = 60
		seconds = seconds - 1
		is_there_time = hours > 0 or minutes > 0 or seconds >= 0

		time.sleep(1)
		clearConsole()
else:
	print("Invalid data")

print("The timer ended")
