decoration = "--------------------------------------"


def update_content():
	global todo_content, done_content

	with open("TODO.txt", "r") as todo_file:
		todo_content = todo_file.readlines()

	with open("Done.txt", "r") as done_file:
		done_content = done_file.readlines()


def print_file(description, filename):
	print(decoration)
	print(description)

	with open(filename, "r") as file:
		for line in file:
			print(line.strip())

	print(decoration)


def remove_task():
	def normalizer(my_list, since):
		def change_index(task, new_index):
			task = task.split()
			task[0] = str(new_index)
			task = " ".join(task)
			return task


		if len(my_list) == 1:
			change_index(my_list[0], 1)
		else:
			for i in range(since, len(my_list)):
				index = int(my_list[i - 1].split()[0]) + 1 # Previous index + 1
				my_list[i] = change_index(task, index)
		return my_list


	global todo_content, done_content

	print_file("TODO:", "TODO.txt")

	with open("TODO.txt", "w") as todo_file:
		with open("Done.txt", "w") as done_file:
			task = int(input("What task did you do? (Write the number of the task): ")) - 1
			task_content = todo_content[task]

			done_content.append(task_content)
			todo_content.remove(task_content)

			for i in normalizer(todo_content, task):
				todo_file.write(i)

			for i in normalizer(done_content, len(done_content) - 1):
				done_file.write(i)


def add_task():
	print(decoration)
	with open("TODO.txt", "a") as todo_file:
		if len(todo_content) == 0:
			number = 1
		else:
			last_task = todo_content[-1]
			last_task_number = int((last_task.split())[0])
			number = last_task_number + 1

		task = input("Write the task: \n")
		todo_file.write(f"{number} {task} \n")
		print(decoration)


option = 0
print("Welcome to TODO list")

while option != 5:
	update_content()
	print("Options:")
	option = int(input("1. Add a task \n2. Remove a task \n3. See tasks \n4. See done tasks \n5. Exit \n"))
	if option == 1:
		add_task()
	elif option == 2:
		remove_task()
	elif option == 3:
		print_file("TODO:", "TODO.txt")
	elif option == 4:
		print_file("Done:", "Done.txt")
