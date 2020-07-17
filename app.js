/**
 * @author Josh Dean <joshualukedean@gmail.com>
 * @copyright Copyright (c) 2020 Joshua Dean and/or his affiliates.
 */

// --- Dependencies ---
// NPM Dependencies 
require('dotenv').config()
let express = require('express') // Webserver
let bodyParser = require('body-parser') // Parse api call bodys
let session = require('express-session')  // Enables session variables
const uniqid = require('uniqid')
// Local Imports
const routes = require("./routes/app.routes")
let path = require("path"); // Local path variables

// --- Entry point for the sevrer ---
let app = express() // Instantiate Express.js

// Set up Sessions
app.use(session({
    secret : uniqid(), //generate a unique key for the secret 
    resave : false,
    saveUninitialized : false
}));

app.use(routes);


// Intilise the servers port
let port = process.env.PORT || 3006;
// Start the server 
app.listen(port, () => console.log(`Captive portal listening to port ${port}`));