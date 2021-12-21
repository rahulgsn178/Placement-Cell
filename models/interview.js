const mongoose = require('mongoose');


const interviewSchema = new mongoose.Schema({
    company: {
        type: String
    },
    date: {
        type: String
    },
    profile: {
        type: String
    }
}, {
    timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;
