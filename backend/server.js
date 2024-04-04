const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
// const appointmentsRouter = require('./routes/appointments');
const patients = require('./models/patients');
const Doctor = require('./models/doctor');
// const Appointment = require('./models/appointment');


const app = express();


// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pharmacy_management_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Define routes
app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);

// Start the server
const port =  3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
