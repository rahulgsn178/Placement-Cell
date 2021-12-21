const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const Student = require('../models/student');
const Interview = require('../models/interview');


// Get Home Page
router.get('/', auth.checkNotAuthenticated, (req, res) => {
  res.render('home')
});

// Get Dashboard
router.get('/dashboard', auth.ensureAuthenticated, async (req, res) => {
  let students = await Student.find({});
  let interviews = await Interview.find({});
  res.render('dashboard', {
    user: req.user,
    students: students,
    interviews: interviews,
    requestedCompany: null
  });
});


// Show status in student list for this ID
router.get('/:name', auth.ensureAuthenticated, async (req, res) => {
  let requestedCompany = req.params.name;
  let students = await Student.find({});
  let interviews = await Interview.find({});
  res.render('dashboard', {
      user: req.user,
      students: students,
      interviews: interviews,
      requestedCompany: requestedCompany
  });
});








module.exports = router; 