vowels = ["a", "e", "i", "o", "u"]
character = "*"

def analyzer(text):
	frequencies = [0, 0, 0, 0, 0]

	for letter in text:
		for i, vowel in enumerate(vowels):
			if letter == vowel:
				frequencies[i] += 1
	return frequencies

# ------------------------------------- - ------------------------------------ #

text = input("Write the text: ")
analysis = analyzer(text)

print("\tLetter"     +      "\t    Frequency" + "\t    Histogram")
for i, vowel in enumerate(vowels):
	frequency = analysis[i]
	print(f"\t  {vowel} \t\t{frequency} \t\t{character * frequency}")
print("\nSorted text")

text = text.replace(" ", "")
sorted_text = "".join(sorted(text))

print(sorted_text)
