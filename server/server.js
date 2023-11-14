require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const URI = require('./URI'); // URI string to connect to DB, changes based on local or environment var

const routes = require('./routes'); // Routes
const db = require('./config/connection'); // Database connection
const PORT = process.env.PORT || 3001; // Server port if environment provides (ex. when deployed), otherwise it's 3001
const path = require('path');

const store = new MongoDBStore({ // Initialize the Mongo store to hold our user sessions
    uri: URI, // Connect based on local or Atlas Cluster (if provided in environment vars)
    collection: 'sessions' // Name of store
});

store.on('error', function(error) {
    console.error(error);
});

app.use(session({
    secret: process.env.SECRET || "secret", // Essentially the seed for our session. Anyone with this can decrypt our passwords
    cookie: {
      maxAge: 1000 * 60 * 60 * 4 // Set this to 1000 ms (1 second) * 60 seconds * 60 minutes * 4 hours
    },
    store: store, // Tell it to store the sessions in our Mongo store we made
    resave: false, // True makes the session resave upon each request, it's unnecessary
    saveUninitialized: false // Does not allow users to create an uninitialized session
}));
  
app.use(express.json()); // Middleware to parse incoming body as JSON, sets up req.body
app.use(express.urlencoded({ extended: true })); // Good for parsing HTML forms for POST requests
app.use(routes); // Tell server to use our routes

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist'))); // Setting up public folder

    app.get('*', (req, res) => { // Route grabs any requests that aren't handled by API and sends html file
      res.sendFile(path.join(__dirname, '../client/dist/index.html')); // Sending over final built html file, which should embody our entire webpage
    });
  }

db.once('open', () => { // Open database
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
})