const Interview = require('../models/interview');


module.exports.create = async (req, res) => {
    let { company, interviewDate, profile } = req.body;
    
    let newInterview = Interview.create({
        company: company,
        date: interviewDate,
        profile: profile
    });
    res.redirect('/dashboard');
}



    