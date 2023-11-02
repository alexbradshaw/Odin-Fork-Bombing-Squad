require('dotenv').config(); // Bring in .env config

module.exports = process.env.MONGODB_URI || 'mongodb://localhost:27017/OFBS'; // Chooses between environment var (likely an atlas cluster) or local mongo server