const express = require('express');
const bodyParser = require('body-parser');
const { createCanvas, loadImage } = require('canvas');

const app = express();
const port = 3000;

app.use(bodyParser.json());

/**
 * Extracts the file extension from a given URL.
 *
 * @param {string} url - the URL from which to extract the file extension
 * @return {string|null} the file extension in lowercase, or null if no extension is found
 */
function getFileExtensionFromUrl(url) {
    // Use a regular expression to extract the file extension
    const regex = /(?:\.([^.]+))?$/; // Match the last dot and anything after it
    const extension = regex.exec(url)[1]; // Extract the extension (group 1 in the regex)

    // Ensure the extension is in lowercase (optional)
    if (extension) {
        return extension.toLowerCase();
    } else {
        return null; // Return null if no extension is found
    }
}

/**
 * Calculates the new height based on the aspect ratio of the original width and height.
 *
 * @param {number} originalWidth - The original width
 * @param {number} originalHeight - The original height
 * @param {number} newWidth - The new width
 * @return {number} The calculated new height
 */
function aspect_height(originalWidth, originalHeight, newWidth) {
    // Calculate the aspect ratio
    const aspectRatio = originalWidth / originalHeight;

    // Calculate the new height based on the aspect ratio
    const newHeight = newWidth / aspectRatio;

    return newHeight;
}

/**
 * A function to calculate the new y coordinate based on the given height and y coordinate.
 *
 * @param {number} newHeight - the new height value
 * @param {number} height - the current height value
 * @param {number} y - the current y coordinate value
 * @return {number} the new y coordinate value
 */
function aspectY(newHeight, height, y) {
    const newY = height > newHeight ? y + (height - newHeight) : y - ((newHeight - height)/2);
    return newY;
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;