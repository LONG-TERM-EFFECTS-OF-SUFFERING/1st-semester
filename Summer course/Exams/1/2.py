colors = {
	"rojo": "Red",
	"amarillo": "Yellow",
	"cafe": "Brown",
	"morado": "Purple",
	"verde": "Green",
	"gris": "Gray",
	"negro": "Black",
	"blanco": "White",
	"azul": "Blue",
	"naranja": "Orange",
	"rosa": "Pink",
	"rosado": "Pink",
	"violeta": "Violet"
}


color = input("Write the color: ")

# Normalization
user_color = (color.lower()).strip()

if user_color in colors:
	print(f"{user_color} in English is {colors[color]}")
else:
	print(f"Sorry, the color {color} isn't in our dictionary, the available colors are {', '.join(colors.keys())}")
