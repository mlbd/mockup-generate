const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {

    const body = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.json({ body });
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;