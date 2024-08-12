const express = require('express');
const router = express.Router();
const Department = require('../models/department');

router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

router.post('/', async (req, res) => {
  const department = new Department(req.body);
  await department.save();
  res.json(department);
});

router.put('/:id', async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(department);
});

router.delete('/:id', async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: 'Department deleted' });
});

module.exports = router;
