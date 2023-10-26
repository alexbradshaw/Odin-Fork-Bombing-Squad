const mongoose = require('mongoose');
const URI = require('./URI');

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;