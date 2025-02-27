const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    description: { type: String, required: true },
    soilType: { type: String, required: true },
    climate: { type: String, required: true },
    medicinalUses: { type: [String], required: true },
});

module.exports = mongoose.model('Plant', plantSchema);
