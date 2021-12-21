const mongoose = require('mongoose');




const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    college: {
        type: String
    },
    batch: {
        type: String
    },
    phone: {
        type: String
    },
    course: {
        type: String
    },
    score: {
        type: Array
    }, 
    companies: [
        {
            name: String,
            date : String,
            profile: String,
            status: String
        }
    ]
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
