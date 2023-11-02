require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const URI = require('./config/URI');

const routes = require('./routes');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

const store = new MongoDBStore({
    uri: URI,
    collection: 'sessions'
});

store.on('error', function(error) {
    console.error(error);
});

app.use(session({
    secret: process.env.SECRET || "secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 4
    },
    store: store,
    resave: false,
    saveUninitialized: false
}));
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
})