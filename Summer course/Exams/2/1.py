decoration = "----------------------------------"


def data_entry():
	all_grades = []

	for i in range(3):
		student_grades = []

		for j in range(3):
			grade = float(input(f"Write the grade {j + 1} of the student {i + 1}: "))
			student_grades.append(grade)

		print(decoration)

		all_grades.append(student_grades)

	return all_grades


def student_average(student_grades):
	return round(sum(student_grades) / len(student_grades), 1)


def subject_averages(all_grades):
	averages = [0, 0, 0]

	for i in range(3):
		my_sum = 0

		for grades in all_grades:
			my_sum += grades[i]

		averages[i] = round(my_sum / 3, 1)

	return averages

# ------------------------------------- - ------------------------------------ #

all_grades = data_entry()
print(all_grades)
print("\t	 Stu.1  " + " Stu.2  " + " Stu.3  ")

for i, grades in enumerate(all_grades):
	print(f"{i + 1} Subject     {grades[0]}     {grades[1]}     {grades[2]}")

print(decoration)

for i, grades in enumerate(all_grades):
	average = student_average(grades)
	print(f"{i + 1} student average: {average}")

print(decoration)

for i, average in enumerate(subject_averages(all_grades)):
	print(f"{i + 1} subject average: {average}")

print(decoration)
