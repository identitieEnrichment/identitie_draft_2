#!/bin/zsh

# Directory where videos are located
VIDEO_DIR="./public/assets/videos/sectors"

# Output directory for optimized videos
OUTPUT_DIR="./public/assets/videos/optimized_sectors"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through each video file in the source directory
for video in "$VIDEO_DIR"/*.mp4; do
    # Get the base name of the video (without the path)
    filename=$(basename "$video")
    
    # Set output file path
    output_file="$OUTPUT_DIR/$filename"
    
    # Run ffmpeg to optimize the video
    ffmpeg -i "$video" -vcodec libx264 -crf 28 -preset fast -acodec aac "$output_file"
    
    echo "Optimized: $filename"
done