require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/hospitalManagement',
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV || 'development'
};
