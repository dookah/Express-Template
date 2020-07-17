// --- Dependencies ---
let express = require('express')
let router = express.Router();
// Local Imports
let appController = require('../controllers/app.controller')

router.get('/', appController.root)


// Expose the routes to app.js
module.exports = router;