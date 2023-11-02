const mongoose = require('mongoose');
const URI = require('./URI'); // Import db connection string

mongoose.connect(URI, {
    useNewUrlParser: true, // Required option for parsing db connection string
    useUnifiedTopology: true, // Recommended option for server discovery/monitoring
});

module.exports = mongoose.connection; // Export connection