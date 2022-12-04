require('dotenv').config()
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session)

// Database connection
async function connect(){
    try {
        await mongoose.connect(process.env.URL_MONGOOSE);
        console.log("DB connected!!!");
    } catch (error) {
        console.log("DB not connect!!!");
    }
    
}

connect();

// Session Store
// Tao session luu vao db
let mongoStore = new MongoDbStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
})

// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {maxAge: 3000 * 60 * 60 * 24}, //Sử dụng trong 24h
}))

app.use(flash())

// Assets
app.use(express.static('public'))
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    next();
})

// Set Template engine
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log('listening on port 3000');
})