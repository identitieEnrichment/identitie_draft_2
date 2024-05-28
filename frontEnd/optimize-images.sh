#!/bin/bash

# Create a directory for optimized images if it doesn't exist
mkdir -p ./public/assets/optimized

# Loop through all image files in the assets directory
for file in ./public/assets/*.{jpg,jpeg,png,webp}; do
  # Get the base filename without the extension
  filename=$(basename "$file" | cut -f 1 -d '.')

  # Resize the image to 50% of its original dimensions and reduce quality to 85%
  magick "$file" -resize 50% -quality 85 "./public/assets/optimized/${filename}-optimized.${file##*.}"
done
