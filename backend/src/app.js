const express = require('express');
const router = express.Router();

// Import routes
const plantRoutes = require('./routes/plantRoutes');

router.use('/plants', plantRoutes);

module.exports = router;
