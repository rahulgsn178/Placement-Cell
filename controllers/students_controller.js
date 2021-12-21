const Student = require('../models/student');


module.exports.create = (req, res) => {
    
    let { name, email, college, batch, phone, course, placed, dsaScore, webDScore, reactScore, company, interviewDate, profile, result} = req.body;

    let newStudent = Student.create({
        name: name,
        email: email,
        college: college,
        batch: batch,
        phone: phone,
        course: course,
        score: [dsaScore, webDScore, reactScore],
        companies: [
            {
                name: company,
                date: interviewDate,
                profile: profile,
                status: result
            }
        ]
    });
    res.redirect('/dashboard');
}