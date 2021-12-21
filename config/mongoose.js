const mongoose = require('mongoose');

const db = process.env.DATABASEURL || "mongodb://localhost:27017/placement_cell";


mongoose.connect(db, { useNewURLParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = db;