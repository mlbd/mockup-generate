const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
    try {
        const { thumbnail_url, position_data, post_id, logo } = req.body;

        // Log received data for debugging
        // console.log('Received thumbnail_url:', thumbnail_url);
        // console.log('Received position_data:', position_data);
        // console.log('Received post_id:', post_id);
        // console.log('Received logo:', logo);

        const file_ext = getFileExtensionFromUrl(thumbnail_url);
        let filename = post_id + '.' + file_ext;


        res.json({ thumbnail_url, filename });
    } catch (error) {
     
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;