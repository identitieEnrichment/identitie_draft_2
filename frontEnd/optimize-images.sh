#!/bin/bash

# Create a directory for optimized images if it doesn't exist
mkdir -p ./public/assets/optimized

# Loop through all image files in the non-optimized directory
for file in ./public/assets/non-optimized/*.{jpg,jpeg,png,webp}; do
  # Get the base filename with the extension
  filename=$(basename "$file")

  # Resize the image to 50% of its original dimensions and reduce quality to 85%
  magick "$file" -resize 50% -quality 85 "./public/assets/optimized/${filename}"
done
