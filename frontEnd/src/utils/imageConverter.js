// utils/imageConverter.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath).toFormat('webp').toFile(outputPath);
    console.log(`${inputPath} converted to WebP successfully!`);
  } catch (error) {
    console.error(`Error converting ${inputPath} to WebP:`, error);
  }
};

module.exports = { convertToWebP };
