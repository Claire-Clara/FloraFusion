const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Get all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// Add a new plant
router.post('/', async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        await newPlant.save();
        res.status(201).json(newPlant);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
});

module.exports = router;
