const express = require('express');
const router = express.Router();
const Prescription = require('../models/prescription');

// Create a new prescription
router.post('/', async (req, res) => {
  const { patientName, doctorName, medication, dosage } = req.body;
  try {
    let prescription = new Prescription({ patientName, doctorName, medication, dosage });
    await prescription.save();
    res.json(prescription);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all prescriptions
router.get('/', async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.json(prescriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get a single prescription by ID
router.get('/:id', async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id);
    if (!prescription) {
      return res.status(404).json({ msg: 'Prescription not found' });
    }
    res.json(prescription);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prescription not found' });
    }
    res.status(500).send('Server error');
  }
});

// Update a prescription
router.put('/:id', async (req, res) => {
  const { patientName, doctorName, medication, dosage } = req.body;

  // Build prescription object
  const prescriptionFields = {};
  if (patientName) prescriptionFields.patientName = patientName;
  if (doctorName) prescriptionFields.doctorName = doctorName;
  if (medication) prescriptionFields.medication = medication;
  if (dosage) prescriptionFields.dosage = dosage;

  try {
    let prescription = await Prescription.findById(req.params.id);

    if (!prescription) {
      return res.status(404).json({ msg: 'Prescription not found' });
    }

    prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      { $set: prescriptionFields },
      { new: true }
    );

    res.json(prescription);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prescription not found' });
    }
    res.status(500).send('Server error');
  }
});

// Delete a prescription
router.delete('/:id', async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id);

    if (!prescription) {
      return res.status(404).json({ msg: 'Prescription not found' });
    }

    await Prescription.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Prescription removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prescription not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
