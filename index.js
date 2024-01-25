const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.post("/generate-image", (req, res) => {

    try {
        const { thumbnail_url, position_data, post_id, logo } = req.body;

        res.json({ thumbnail_url });
    } catch (error) {
        console.error('Error:', error);

        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;