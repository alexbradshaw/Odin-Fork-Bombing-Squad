require('dotenv').config();

module.exports = process.env.MONGODB_URI || 'mongodb://localhost:27017/OFBS';