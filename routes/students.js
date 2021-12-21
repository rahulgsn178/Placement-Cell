const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const studentController = require('../controllers/students_controller');


// Create student
router.post('/create', auth.ensureAuthenticated, studentController.create);


// Get Student creation form
router.get('/form', auth.ensureAuthenticated, (req, res) => 
    res.render('studentsform', {
      user: req.user
    })
);


module.exports = router;