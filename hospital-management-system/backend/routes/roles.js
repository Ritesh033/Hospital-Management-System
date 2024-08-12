const express = require('express');
const router = express.Router();
const Role = require('../models/role');

router.get('/', async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
});

router.post('/', async (req, res) => {
  const role = new Role(req.body);
  await role.save();
  res.json(role);
});

router.put('/:id', async (req, res) => {
  const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(role);
});

router.delete('/:id', async (req, res) => {
  await Role.findByIdAndDelete(req.params.id);
  res.json({ message: 'Role deleted' });
});

module.exports = router;
