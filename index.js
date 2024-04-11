const express = require("express");
const app = express();
const router = require('./route/index.js');
const weatherController = require('./controller/weather');
const bodyParser = require('body-parser');

// Middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Use the router for other routes
app.use('/', router);

const port = 3000;
app.listen(port, () => {
    console.log("App is running on port", port);
});
