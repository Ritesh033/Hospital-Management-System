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
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/departments', departmentRoutes);
app.use('/prescriptions', prescriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));