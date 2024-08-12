const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  medicationDetails: { type: String, required: true },
  dosage: { type: String, required: true },
  issuedDate: { type: Date, required: true },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
