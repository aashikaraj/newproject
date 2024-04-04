const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('Patient', PatientSchema);
// module.exports = Patient;