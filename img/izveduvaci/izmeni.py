from PIL import Image
import os

# Каде се наоѓаат сликите
directory = r"D:\TMP\p\img\izveduvaci"

# Каде да ги стави 
output_directory = r"D:\TMP\p\img\izveduvaci\sredeni"

# Која резолуција да ги направи сликите
size = (256, 256)

for filename in os.listdir(directory):
    filepath = os.path.join(directory, filename)
    if filepath.endswith(".jpg") or filepath.endswith(".png"):
        image = Image.open(filepath)
        width, height = image.size
        if width < height:
            new_width = size[0]
            new_height = int(height * (size[0] / width))
        else:
            new_height = size[1]
            new_width = int(width * (size[1] / height))
        resized_image = image.resize((new_width, new_height))
        os.makedirs(output_directory, exist_ok=True)
        output_filepath = os.path.join(output_directory, filename)
        resized_image.save(output_filepath)
