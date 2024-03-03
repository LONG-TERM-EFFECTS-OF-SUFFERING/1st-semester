decoration = "----------------------------------"


def data_entry(months):
	all_sales = []

	for i in range(months):
		sales = []
		for j in range(3):
			sale = float(input(f"Write the sale of the site {j + 1} of the month {i + 1}: "))
			sales.append(sale)

		all_sales.append(sales)

		print(decoration)
	return all_sales


def analyzer(all_sales):
	data = [0, 0, 0, 0, 0] # Total sum, monthly average, largest sale, site associated with the largest sale, month of the largest sale
	my_sum = data[0]
	highest_sale = data[2]
	sede = data[3]
	month = data[4]

	for i, sales in enumerate(all_sales):
		for j, sale in enumerate(sales):
			my_sum += sale

			if sale > highest_sale:
				highest_sale = sale
				sede = i + 1
				month = j + 1

	data[0] = my_sum
	data[1] = my_sum / len(all_sales)
	data[2] = highest_sale
	data[3] = sede
	data[4] = month

	return data

# ------------------------------------- - ------------------------------------ #

print("***** Welcome to DELICIAS *****\n")

print(decoration)

sales = data_entry(2)
analysis = analyzer(sales)

print("Total sales sum: ", analysis[0])
print("Average monthly sales: ", analysis[1])
print(f"The site with the largest sale was {analysis[3]} with a value of ${analysis[2]} in the month {analysis[4]}")
