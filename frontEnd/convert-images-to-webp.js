// scripts/convert-images-to-webp.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath).toFormat('webp').toFile(outputPath);
    console.log(`${inputPath} converted to WebP successfully!`);
  } catch (error) {
    console.error(`Error converting ${inputPath} to WebP:`, error);
  }
};

const convertImagesToWebP = async () => {
  const optimizedDir = path.join(__dirname, './public/assets/optimized');
  const webpDir = path.join(__dirname, './public/assets/webp');

  // Create webp directory if it doesn't exist
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir);
  }

  // Get list of image files in optimized directory
  const files = fs.readdirSync(optimizedDir);

  // Convert each image file to WebP
  for (const file of files) {
    const inputPath = path.join(optimizedDir, file);
    const outputPath = path.join(webpDir, `${path.parse(file).name}.webp`);
    await convertToWebP(inputPath, outputPath);
  }
};

convertImagesToWebP();
