const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const userRoutes = require('./routes/users');
const roleRoutes = require('./routes/roles');
const appointmentRoutes = require('./routes/appointments');
const departmentRoutes = require('./routes/departments');
const prescriptionRoutes = require('./routes/prescriptions');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error('✗ MongoDB connection error:', err));

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/prescriptions', prescriptionRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} (${config.environment})`);
});

module.exports = app;
