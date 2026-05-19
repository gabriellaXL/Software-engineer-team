const express = require('express');
const { submitApplication, getApplications, reviewApplication } = require('../controllers/applicationController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['student', 'student_leader']), submitApplication);
router.get('/', authenticate, getApplications);
router.post('/review', authenticate, authorize(['admin', 'teacher']), reviewApplication);

module.exports = router;
