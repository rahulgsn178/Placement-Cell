require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const customMiddleware = require('./config/middleware');
const downloadMiddleware = require('./config/download-middleware');
const auth = require('./config/auth');
// const ObjectsToCsv = require('objects-to-csv');
// const fs = require('fs');
// const Student = require('./models/student');

const app = express();

// Passport Config
require('./config/passport-local-strategy')(passport);

// Passport Social Authentication
const passportGoogle = require('./config/passport-google-oauth2-strategy');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets'));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(session({
  name: 'placement',
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
}));

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Customise middleware
app.use(customMiddleware.sendMessages);


// Routes
app.get('/download', auth.ensureAuthenticated, downloadMiddleware.start);
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/students', require('./routes/students'));
app.use('/interview', require('./routes/interview'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on : ${PORT}`));



