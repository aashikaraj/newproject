const express = require('express');
const router = express.Router();
const Patient = require('../models/patients');

// Get all patients
router.get('/', (req, res) => {
    Patient.find((err, patients) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(patients);
        }
    });
});

// Add more routes for CRUD operations

module.exports = router;
