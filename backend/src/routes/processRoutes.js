const express = require('express');
const { getProcessNodes, getStudentProgress, updateProgress } = require('../controllers/processController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/nodes', authenticate, getProcessNodes);
router.get('/progress', authenticate, getStudentProgress);
router.put('/progress', authenticate, authorize(['admin', 'teacher', 'student_leader']), updateProgress);

module.exports = router;
