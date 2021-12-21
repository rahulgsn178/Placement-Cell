const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const interviewController = require('../controllers/interview_controller');



// Get Interview form
router.get('/form', auth.ensureAuthenticated, (req, res) => 
    res.render('interviewform')
);

// Create Interview
router.post('/create', auth.ensureAuthenticated, interviewController.create);


module.exports = router;